import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import isStringEmpty from './util/isStringEmpty';

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  position: relative;
  outline: none;
  width: 100%;
  height: 50px;
  resize: none;
  border: 1px solid #999999;
  border-radius: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 21px;
  letter-spacing: -0.41px;
  color: #000000;
  padding: 12px;
  padding-left: 14px;
  padding-top: 28px;
  background: transparent;
  transition: all 0.2s ease;

  &::placeholder{
    color: #999999;
  }

  ${({ invalid }) => invalid && `
      border-color: #F44336;
  `}

  ${({ $isfocused }) => $isfocused && `
    border-color: #007AFF;
  `}

  ${({ borderradius }) => borderradius && `
    border-radius: ${borderradius}px;
  `}

  ${({ $hastext, $hasplaceholder, $haspersistentlabel }) => {
    if (
      ($haspersistentlabel && !$hasplaceholder && !$hastext) ||
      (!$haspersistentlabel && $hasplaceholder && $hastext) ||
      (!$haspersistentlabel && !$hasplaceholder) ||
      (!$haspersistentlabel && !$hastext)
    ) {
      return 'padding-top: 12px;';
    }

    return '';
  }}
`;

const PersistentLabel = styled.div`
  position: absolute;
  width: calc(100% - 20px);
  left: 1px;
  top: calc(50% - 1px);
  padding-left: 14px;
  padding-top: 2px;
  padding-bottom: 2px;
  transform: translateY(-50%);

  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 21px;
  color: #4F4F4F;
  pointer-events: none;
  transition: all 0.2s ease;

  ${({ isInvalid }) => isInvalid && `
    color: #F44336;
  `}

  ${({ hasText, hasPlaceholder }) => !hasPlaceholder && !hasText && `
    color: #999999;
  `}

  ${({ hasText, hasPlaceholder }) => (hasText || hasPlaceholder) ? `
    left: 1px;
    top: 1px;
    padding-left: 14px;
    padding-top: 5px;
    padding-bottom: 2px;
    transform: translateY(0);
    font-size: 12px;
    line-height: 18px;
  ` : `
    color: #999999;
  `}

  ${({ hasText, hasPlaceholder, isFocused }) => (hasText || hasPlaceholder) && isFocused && `
    color: #007AFF;
  `}
`;

const CharacterCounter = styled.div`
    position: absolute;
    top: calc(100% + 2px);
    right: 13px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: right;
    color: #757575;
    opacity: 0;
    transition: all 0.15s ease;

    ${({ isInvalid }) => isInvalid && `
      color: #F44336;
    `}

    ${({ isVisible }) => isVisible && `
      opacity: 1;
    `}
`;

const InputError = styled.div`
  position: absolute;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #F44336;
  margin-left: 13px;
`;

const TextInput = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  const {
    persistentLabel,
    value,
    onChange,
    placeholder,
    maxLength,
    errorLabel,
    borderRadius = 10,
    type,
  } = props;

  const isExceedingMaxLength = maxLength ? value.length > maxLength : false;
  const isInvalid = errorLabel && errorLabel !== '';
  const hasPersistentLabel = !isStringEmpty(persistentLabel);
  const hasPlaceholder = !isStringEmpty(placeholder);

  return (
    <Container
      isInvalid={isInvalid}
    >
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        invalid={(isExceedingMaxLength || isInvalid)}
        $isfocused={isFocused}
        borderradius={borderRadius}
        $hastext={value !== ''}
        type={type}
        autoCapitalize="none"
        $haspersistentlabel={hasPersistentLabel}
        $hasplaceholder={hasPlaceholder}
        maxLength={maxLength}
      />
      {
        hasPersistentLabel && (
          <PersistentLabel
            isInvalid={isExceedingMaxLength || isInvalid}
            isFocused={isFocused}
            hasText={value !== ''}
            hasPlaceholder={hasPlaceholder}
          >
            {persistentLabel}
          </PersistentLabel>
        )
      }

      {maxLength && (
        <CharacterCounter
          isInvalid={isExceedingMaxLength}
          isVisible={isFocused || isExceedingMaxLength}
        >
          {`${value.length}/${maxLength}`}
        </CharacterCounter>
      )}

      {
        errorLabel !== '' &&
        <InputError>{errorLabel}</InputError>
      }
    </Container>
  );
};

TextInput.propTypes = {
  persistentLabel: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  errorLabel: PropTypes.string,
  borderRadius: PropTypes.number,
  type: PropTypes.string,
};

export default TextInput;
