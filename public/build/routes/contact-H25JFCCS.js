import {
  Form,
  useActionData,
  useTransition
} from "/build/_shared/chunk-73IWTPSM.js";
import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/shane/shanesme/core/app/routes/contact.jsx?browser
init_react();

// app/routes/contact.jsx
init_react();

// node_modules/react-hook-form/dist/index.esm.mjs
init_react();
var import_react = __toModule(require_react());
var isCheckBoxInput = (element) => element.type === "checkbox";
var isDateObject = (value) => value instanceof Date;
var isNullOrUndefined = (value) => value == null;
var isObjectType = (value) => typeof value === "object";
var isObject = (value) => !isNullOrUndefined(value) && !Array.isArray(value) && isObjectType(value) && !isDateObject(value);
var getEventValue = (event) => isObject(event) && event.target ? isCheckBoxInput(event.target) ? event.target.checked : event.target.value : event;
var getNodeParentName = (name) => name.substring(0, name.search(/.\d/)) || name;
var isNameInFieldArray = (names, name) => [...names].some((current) => getNodeParentName(name) === current);
var compact = (value) => value.filter(Boolean);
var isUndefined = (val) => val === void 0;
var get = (obj, path, defaultValue) => {
  if (!path || !isObject(obj)) {
    return defaultValue;
  }
  const result = compact(path.split(/[,[\].]+?/)).reduce((result2, key) => isNullOrUndefined(result2) ? result2 : result2[key], obj);
  return isUndefined(result) || result === obj ? isUndefined(obj[path]) ? defaultValue : obj[path] : result;
};
var EVENTS = {
  BLUR: "blur",
  CHANGE: "change"
};
var VALIDATION_MODE = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
};
var INPUT_VALIDATION_RULES = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
};
var omit = (source, key) => {
  const copy = Object.assign({}, source);
  delete copy[key];
  return copy;
};
var HookFormContext = import_react.default.createContext(null);
var getProxyFormState = (formState, _proxyFormState, localProxyFormState, isRoot = true) => {
  function createGetter(prop) {
    return () => {
      if (prop in formState) {
        if (_proxyFormState[prop] !== VALIDATION_MODE.all) {
          _proxyFormState[prop] = !isRoot || VALIDATION_MODE.all;
        }
        localProxyFormState && (localProxyFormState[prop] = true);
        return formState[prop];
      }
      return void 0;
    };
  }
  const result = {};
  for (const key in formState) {
    Object.defineProperty(result, key, {
      get: createGetter(key)
    });
  }
  return result;
};
var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;
var shouldRenderFormState = (formStateData, _proxyFormState, isRoot) => {
  const formState = omit(formStateData, "name");
  return isEmptyObject(formState) || Object.keys(formState).length >= Object.keys(_proxyFormState).length || Object.keys(formState).find((key) => _proxyFormState[key] === (!isRoot || VALIDATION_MODE.all));
};
var convertToArrayPayload = (value) => Array.isArray(value) ? value : [value];
function useSubscribe(props) {
  const _props = import_react.default.useRef(props);
  _props.current = props;
  import_react.default.useEffect(() => {
    const tearDown = (subscription2) => {
      if (subscription2) {
        subscription2.unsubscribe();
      }
    };
    const subscription = !props.disabled && _props.current.subject.subscribe({
      next: _props.current.callback
    });
    return () => tearDown(subscription);
  }, [props.disabled]);
}
var isString = (value) => typeof value === "string";
var generateWatchOutput = (names, _names, formValues, isGlobal) => {
  const isArray = Array.isArray(names);
  if (isString(names)) {
    isGlobal && _names.watch.add(names);
    return get(formValues, names);
  }
  if (isArray) {
    return names.map((fieldName) => (isGlobal && _names.watch.add(fieldName), get(formValues, fieldName)));
  }
  isGlobal && (_names.watchAll = true);
  return formValues;
};
var isFunction = (value) => typeof value === "function";
var objectHasFunction = (data) => {
  for (const key in data) {
    if (isFunction(data[key])) {
      return true;
    }
  }
  return false;
};
var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria ? Object.assign(Object.assign({}, errors[name]), { types: Object.assign(Object.assign({}, errors[name] && errors[name].types ? errors[name].types : {}), { [type]: message || true }) }) : {};
var isKey = (value) => /^\w*$/.test(value);
var stringToPath = (input) => compact(input.replace(/["|']|\]/g, "").split(/\.|\[/));
function set(object, path, value) {
  let index = -1;
  const tempPath = isKey(path) ? [path] : stringToPath(path);
  const length = tempPath.length;
  const lastIndex = length - 1;
  while (++index < length) {
    const key = tempPath[index];
    let newValue = value;
    if (index !== lastIndex) {
      const objValue = object[key];
      newValue = isObject(objValue) || Array.isArray(objValue) ? objValue : !isNaN(+tempPath[index + 1]) ? [] : {};
    }
    object[key] = newValue;
    object = object[key];
  }
  return object;
}
var focusFieldBy = (fields, callback, fieldsNames) => {
  for (const key of fieldsNames || Object.keys(fields)) {
    const field = get(fields, key);
    if (field) {
      const _f = field._f;
      const current = omit(field, "_f");
      if (_f && callback(_f.name)) {
        if (_f.ref.focus && isUndefined(_f.ref.focus())) {
          break;
        } else if (_f.refs) {
          _f.refs[0].focus();
          break;
        }
      } else if (isObject(current)) {
        focusFieldBy(current, callback);
      }
    }
  }
};
var isWatched = (name, _names, isBlurEvent) => !isBlurEvent && (_names.watchAll || _names.watch.has(name) || [..._names.watch].some((watchName) => name.startsWith(watchName) && /^\.\w+/.test(name.slice(watchName.length))));
function cloneObject(data) {
  let copy;
  const isArray = Array.isArray(data);
  if (data instanceof Date) {
    copy = new Date(data);
  } else if (data instanceof Set) {
    copy = new Set(data);
  } else if (isArray || isObject(data)) {
    copy = isArray ? [] : {};
    for (const key in data) {
      if (isFunction(data[key])) {
        copy = data;
        break;
      }
      copy[key] = cloneObject(data[key]);
    }
  } else {
    return data;
  }
  return copy;
}
function createSubject() {
  let _observers = [];
  const next = (value) => {
    for (const observer of _observers) {
      observer.next(value);
    }
  };
  const subscribe = (observer) => {
    _observers.push(observer);
    return {
      unsubscribe: () => {
        _observers = _observers.filter((o) => o !== observer);
      }
    };
  };
  const unsubscribe = () => {
    _observers = [];
  };
  return {
    get observers() {
      return _observers;
    },
    next,
    subscribe,
    unsubscribe
  };
}
var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);
function deepEqual(object1, object2) {
  if (isPrimitive(object1) || isPrimitive(object2)) {
    return object1 === object2;
  }
  if (isDateObject(object1) && isDateObject(object2)) {
    return object1.getTime() === object2.getTime();
  }
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const val1 = object1[key];
    if (!keys2.includes(key)) {
      return false;
    }
    if (key !== "ref") {
      const val2 = object2[key];
      if (isDateObject(val1) && isDateObject(val2) || isObject(val1) && isObject(val2) || Array.isArray(val1) && Array.isArray(val2) ? !deepEqual(val1, val2) : val1 !== val2) {
        return false;
      }
    }
  }
  return true;
}
var getValidationModes = (mode) => ({
  isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
  isOnBlur: mode === VALIDATION_MODE.onBlur,
  isOnChange: mode === VALIDATION_MODE.onChange,
  isOnAll: mode === VALIDATION_MODE.all,
  isOnTouch: mode === VALIDATION_MODE.onTouched
});
var isBoolean = (value) => typeof value === "boolean";
var isFileInput = (element) => element.type === "file";
var isHTMLElement = (value) => value instanceof HTMLElement;
var isMultipleSelect = (element) => element.type === `select-multiple`;
var isRadioInput = (element) => element.type === "radio";
var isRadioOrCheckbox = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);
var isWeb = typeof window !== "undefined" && typeof window.HTMLElement !== "undefined" && typeof document !== "undefined";
var live = (ref) => isHTMLElement(ref) && ref.isConnected;
function baseGet(object, updatePath) {
  const length = updatePath.slice(0, -1).length;
  let index = 0;
  while (index < length) {
    object = isUndefined(object) ? index++ : object[updatePath[index++]];
  }
  return object;
}
function unset(object, path) {
  const updatePath = isKey(path) ? [path] : stringToPath(path);
  const childObject = updatePath.length == 1 ? object : baseGet(object, updatePath);
  const key = updatePath[updatePath.length - 1];
  let previousObjRef;
  if (childObject) {
    delete childObject[key];
  }
  for (let k = 0; k < updatePath.slice(0, -1).length; k++) {
    let index = -1;
    let objectRef;
    const currentPaths = updatePath.slice(0, -(k + 1));
    const currentPathsLength = currentPaths.length - 1;
    if (k > 0) {
      previousObjRef = object;
    }
    while (++index < currentPaths.length) {
      const item = currentPaths[index];
      objectRef = objectRef ? objectRef[item] : object[item];
      if (currentPathsLength === index && (isObject(objectRef) && isEmptyObject(objectRef) || Array.isArray(objectRef) && !objectRef.filter((data) => isObject(data) && !isEmptyObject(data) || isBoolean(data)).length)) {
        previousObjRef ? delete previousObjRef[item] : delete object[item];
      }
      previousObjRef = objectRef;
    }
  }
  return object;
}
function markFieldsDirty(data, fields = {}) {
  const isParentNodeArray = Array.isArray(data);
  if (isObject(data) || isParentNodeArray) {
    for (const key in data) {
      if (Array.isArray(data[key]) || isObject(data[key]) && !objectHasFunction(data[key])) {
        fields[key] = Array.isArray(data[key]) ? [] : {};
        markFieldsDirty(data[key], fields[key]);
      } else if (!isNullOrUndefined(data[key])) {
        fields[key] = true;
      }
    }
  }
  return fields;
}
function getDirtyFieldsFromDefaultValues(data, formValues, dirtyFieldsFromValues) {
  const isParentNodeArray = Array.isArray(data);
  if (isObject(data) || isParentNodeArray) {
    for (const key in data) {
      if (Array.isArray(data[key]) || isObject(data[key]) && !objectHasFunction(data[key])) {
        if (isUndefined(formValues) || isPrimitive(dirtyFieldsFromValues[key])) {
          dirtyFieldsFromValues[key] = Array.isArray(data[key]) ? markFieldsDirty(data[key], []) : Object.assign({}, markFieldsDirty(data[key]));
        } else {
          getDirtyFieldsFromDefaultValues(data[key], isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);
        }
      } else {
        dirtyFieldsFromValues[key] = !deepEqual(data[key], formValues[key]);
      }
    }
  }
  return dirtyFieldsFromValues;
}
var getDirtyFields = (defaultValues, formValues) => getDirtyFieldsFromDefaultValues(defaultValues, formValues, markFieldsDirty(formValues));
var defaultResult = {
  value: false,
  isValid: false
};
var validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
  if (Array.isArray(options)) {
    if (options.length > 1) {
      const values = options.filter((option) => option && option.checked && !option.disabled).map((option) => option.value);
      return { value: values, isValid: !!values.length };
    }
    return options[0].checked && !options[0].disabled ? options[0].attributes && !isUndefined(options[0].attributes.value) ? isUndefined(options[0].value) || options[0].value === "" ? validResult : { value: options[0].value, isValid: true } : validResult : defaultResult;
  }
  return defaultResult;
};
var getFieldValueAs = (value, { valueAsNumber, valueAsDate, setValueAs }) => isUndefined(value) ? value : valueAsNumber ? value === "" ? NaN : +value : valueAsDate && isString(value) ? new Date(value) : setValueAs ? setValueAs(value) : value;
var defaultReturn = {
  isValid: false,
  value: null
};
var getRadioValue = (options) => Array.isArray(options) ? options.reduce((previous, option) => option && option.checked && !option.disabled ? {
  isValid: true,
  value: option.value
} : previous, defaultReturn) : defaultReturn;
function getFieldValue(_f) {
  const ref = _f.ref;
  if (_f.refs ? _f.refs.every((ref2) => ref2.disabled) : ref.disabled) {
    return;
  }
  if (isFileInput(ref)) {
    return ref.files;
  }
  if (isRadioInput(ref)) {
    return getRadioValue(_f.refs).value;
  }
  if (isMultipleSelect(ref)) {
    return [...ref.selectedOptions].map(({ value }) => value);
  }
  if (isCheckBoxInput(ref)) {
    return getCheckboxValue(_f.refs).value;
  }
  return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
}
var getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation) => {
  const fields = {};
  for (const name of fieldsNames) {
    const field = get(_fields, name);
    field && set(fields, name, field._f);
  }
  return {
    criteriaMode,
    names: [...fieldsNames],
    fields,
    shouldUseNativeValidation
  };
};
var isRegex = (value) => value instanceof RegExp;
var getRuleValue = (rule) => isUndefined(rule) ? void 0 : isRegex(rule) ? rule.source : isObject(rule) ? isRegex(rule.value) ? rule.value.source : rule.value : rule;
var hasValidation = (options) => options.mount && (options.required || options.min || options.max || options.maxLength || options.minLength || options.pattern || options.validate);
function schemaErrorLookup(errors, _fields, name) {
  const error = get(errors, name);
  if (error || isKey(name)) {
    return {
      error,
      name
    };
  }
  const names = name.split(".");
  while (names.length) {
    const fieldName = names.join(".");
    const field = get(_fields, fieldName);
    const foundError = get(errors, fieldName);
    if (field && !Array.isArray(field) && name !== fieldName) {
      return { name };
    }
    if (foundError && foundError.type) {
      return {
        name: fieldName,
        error: foundError
      };
    }
    names.pop();
  }
  return {
    name
  };
}
var skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode) => {
  if (mode.isOnAll) {
    return false;
  } else if (!isSubmitted && mode.isOnTouch) {
    return !(isTouched || isBlurEvent);
  } else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) {
    return !isBlurEvent;
  } else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) {
    return isBlurEvent;
  }
  return true;
};
var unsetEmptyArray = (ref, name) => !compact(get(ref, name)).length && unset(ref, name);
var isMessage = (value) => isString(value) || import_react.default.isValidElement(value);
function getValidateError(result, ref, type = "validate") {
  if (isMessage(result) || Array.isArray(result) && result.every(isMessage) || isBoolean(result) && !result) {
    return {
      type,
      message: isMessage(result) ? result : "",
      ref
    };
  }
}
var getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData) ? validationData : {
  value: validationData,
  message: ""
};
var validateField = async (field, inputValue, validateAllFieldCriteria, shouldUseNativeValidation) => {
  const { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, valueAsNumber, mount, disabled } = field._f;
  if (!mount || disabled) {
    return {};
  }
  const inputRef = refs ? refs[0] : ref;
  const setCustomValidity = (message) => {
    if (shouldUseNativeValidation && inputRef.reportValidity) {
      inputRef.setCustomValidity(isBoolean(message) ? "" : message || " ");
      inputRef.reportValidity();
    }
  };
  const error = {};
  const isRadio = isRadioInput(ref);
  const isCheckBox = isCheckBoxInput(ref);
  const isRadioOrCheckbox2 = isRadio || isCheckBox;
  const isEmpty = (valueAsNumber || isFileInput(ref)) && !ref.value || inputValue === "" || Array.isArray(inputValue) && !inputValue.length;
  const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
  const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
    const message = exceedMax ? maxLengthMessage : minLengthMessage;
    error[name] = Object.assign({
      type: exceedMax ? maxType : minType,
      message,
      ref
    }, appendErrorsCurry(exceedMax ? maxType : minType, message));
  };
  if (required && (!isRadioOrCheckbox2 && (isEmpty || isNullOrUndefined(inputValue)) || isBoolean(inputValue) && !inputValue || isCheckBox && !getCheckboxValue(refs).isValid || isRadio && !getRadioValue(refs).isValid)) {
    const { value, message } = isMessage(required) ? { value: !!required, message: required } : getValueAndMessage(required);
    if (value) {
      error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.required, message, ref: inputRef }, appendErrorsCurry(INPUT_VALIDATION_RULES.required, message));
      if (!validateAllFieldCriteria) {
        setCustomValidity(message);
        return error;
      }
    }
  }
  if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
    let exceedMax;
    let exceedMin;
    const maxOutput = getValueAndMessage(max);
    const minOutput = getValueAndMessage(min);
    if (!isNaN(inputValue)) {
      const valueNumber = ref.valueAsNumber || parseFloat(inputValue);
      if (!isNullOrUndefined(maxOutput.value)) {
        exceedMax = valueNumber > maxOutput.value;
      }
      if (!isNullOrUndefined(minOutput.value)) {
        exceedMin = valueNumber < minOutput.value;
      }
    } else {
      const valueDate = ref.valueAsDate || new Date(inputValue);
      if (isString(maxOutput.value)) {
        exceedMax = valueDate > new Date(maxOutput.value);
      }
      if (isString(minOutput.value)) {
        exceedMin = valueDate < new Date(minOutput.value);
      }
    }
    if (exceedMax || exceedMin) {
      getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
      if (!validateAllFieldCriteria) {
        setCustomValidity(error[name].message);
        return error;
      }
    }
  }
  if ((maxLength || minLength) && !isEmpty && isString(inputValue)) {
    const maxLengthOutput = getValueAndMessage(maxLength);
    const minLengthOutput = getValueAndMessage(minLength);
    const exceedMax = !isNullOrUndefined(maxLengthOutput.value) && inputValue.length > maxLengthOutput.value;
    const exceedMin = !isNullOrUndefined(minLengthOutput.value) && inputValue.length < minLengthOutput.value;
    if (exceedMax || exceedMin) {
      getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
      if (!validateAllFieldCriteria) {
        setCustomValidity(error[name].message);
        return error;
      }
    }
  }
  if (pattern && !isEmpty && isString(inputValue)) {
    const { value: patternValue, message } = getValueAndMessage(pattern);
    if (isRegex(patternValue) && !inputValue.match(patternValue)) {
      error[name] = Object.assign({
        type: INPUT_VALIDATION_RULES.pattern,
        message,
        ref
      }, appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message));
      if (!validateAllFieldCriteria) {
        setCustomValidity(message);
        return error;
      }
    }
  }
  if (validate) {
    if (isFunction(validate)) {
      const result = await validate(inputValue);
      const validateError = getValidateError(result, inputRef);
      if (validateError) {
        error[name] = Object.assign(Object.assign({}, validateError), appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message));
        if (!validateAllFieldCriteria) {
          setCustomValidity(validateError.message);
          return error;
        }
      }
    } else if (isObject(validate)) {
      let validationResult = {};
      for (const key in validate) {
        if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
          break;
        }
        const validateError = getValidateError(await validate[key](inputValue), inputRef, key);
        if (validateError) {
          validationResult = Object.assign(Object.assign({}, validateError), appendErrorsCurry(key, validateError.message));
          setCustomValidity(validateError.message);
          if (validateAllFieldCriteria) {
            error[name] = validationResult;
          }
        }
      }
      if (!isEmptyObject(validationResult)) {
        error[name] = Object.assign({ ref: inputRef }, validationResult);
        if (!validateAllFieldCriteria) {
          return error;
        }
      }
    }
  }
  setCustomValidity(true);
  return error;
};
var defaultOptions = {
  mode: VALIDATION_MODE.onSubmit,
  reValidateMode: VALIDATION_MODE.onChange,
  shouldFocusError: true
};
function createFormControl(props = {}) {
  let _options = Object.assign(Object.assign({}, defaultOptions), props);
  let _formState = {
    isDirty: false,
    isValidating: false,
    dirtyFields: {},
    isSubmitted: false,
    submitCount: 0,
    touchedFields: {},
    isSubmitting: false,
    isSubmitSuccessful: false,
    isValid: false,
    errors: {}
  };
  let _fields = {};
  let _defaultValues = _options.defaultValues || {};
  let _formValues = _options.shouldUnregister ? {} : cloneObject(_defaultValues);
  let _stateFlags = {
    action: false,
    mount: false,
    watch: false
  };
  let _names = {
    mount: new Set(),
    unMount: new Set(),
    array: new Set(),
    watch: new Set()
  };
  let delayErrorCallback;
  let timer = 0;
  let validateFields = {};
  const _proxyFormState = {
    isDirty: false,
    dirtyFields: false,
    touchedFields: false,
    isValidating: false,
    isValid: false,
    errors: false
  };
  const _subjects = {
    watch: createSubject(),
    array: createSubject(),
    state: createSubject()
  };
  const validationModeBeforeSubmit = getValidationModes(_options.mode);
  const validationModeAfterSubmit = getValidationModes(_options.reValidateMode);
  const shouldDisplayAllAssociatedErrors = _options.criteriaMode === VALIDATION_MODE.all;
  const debounce = (callback, wait) => (...args) => {
    clearTimeout(timer);
    timer = window.setTimeout(() => callback(...args), wait);
  };
  const _updateValid = async (shouldSkipRender) => {
    let isValid = false;
    if (_proxyFormState.isValid) {
      isValid = _options.resolver ? isEmptyObject((await _executeSchema()).errors) : await executeBuildInValidation(_fields, true);
      if (!shouldSkipRender && isValid !== _formState.isValid) {
        _formState.isValid = isValid;
        _subjects.state.next({
          isValid
        });
      }
    }
    return isValid;
  };
  const _updateFieldArray = (name, method, args, values = [], shouldSetValues = true, shouldSetFields = true) => {
    _stateFlags.action = true;
    if (shouldSetFields && Array.isArray(get(_fields, name))) {
      const fieldValues = method(get(_fields, name), args.argA, args.argB);
      shouldSetValues && set(_fields, name, fieldValues);
    }
    if (_proxyFormState.errors && shouldSetFields && Array.isArray(get(_formState.errors, name))) {
      const errors = method(get(_formState.errors, name), args.argA, args.argB);
      shouldSetValues && set(_formState.errors, name, errors);
      unsetEmptyArray(_formState.errors, name);
    }
    if (_proxyFormState.touchedFields && Array.isArray(get(_formState.touchedFields, name))) {
      const touchedFields = method(get(_formState.touchedFields, name), args.argA, args.argB);
      shouldSetValues && set(_formState.touchedFields, name, touchedFields);
    }
    if (_proxyFormState.dirtyFields) {
      _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
    }
    _subjects.state.next({
      isDirty: _getDirty(name, values),
      dirtyFields: _formState.dirtyFields,
      errors: _formState.errors,
      isValid: _formState.isValid
    });
  };
  const updateErrors = (name, error) => (set(_formState.errors, name, error), _subjects.state.next({
    errors: _formState.errors
  }));
  const updateValidAndValue = (name, shouldSkipSetValueAs, value, ref) => {
    const field = get(_fields, name);
    if (field) {
      const defaultValue = get(_formValues, name, isUndefined(value) ? get(_defaultValues, name) : value);
      isUndefined(defaultValue) || ref && ref.defaultChecked || shouldSkipSetValueAs ? set(_formValues, name, shouldSkipSetValueAs ? defaultValue : getFieldValue(field._f)) : setFieldValue(name, defaultValue);
      _stateFlags.mount && _updateValid();
    }
  };
  const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender) => {
    let isFieldDirty = false;
    const output = {
      name
    };
    const isPreviousFieldTouched = get(_formState.touchedFields, name);
    if (_proxyFormState.isDirty) {
      const isPreviousFormDirty = _formState.isDirty;
      _formState.isDirty = output.isDirty = _getDirty();
      isFieldDirty = isPreviousFormDirty !== output.isDirty;
    }
    if (_proxyFormState.dirtyFields && (!isBlurEvent || shouldDirty)) {
      const isPreviousFieldDirty = get(_formState.dirtyFields, name);
      const isCurrentFieldPristine = deepEqual(get(_defaultValues, name), fieldValue);
      isCurrentFieldPristine ? unset(_formState.dirtyFields, name) : set(_formState.dirtyFields, name, true);
      output.dirtyFields = _formState.dirtyFields;
      isFieldDirty = isFieldDirty || isPreviousFieldDirty !== get(_formState.dirtyFields, name);
    }
    if (isBlurEvent && !isPreviousFieldTouched) {
      set(_formState.touchedFields, name, isBlurEvent);
      output.touchedFields = _formState.touchedFields;
      isFieldDirty = isFieldDirty || _proxyFormState.touchedFields && isPreviousFieldTouched !== isBlurEvent;
    }
    isFieldDirty && shouldRender && _subjects.state.next(output);
    return isFieldDirty ? output : {};
  };
  const shouldRenderByError = async (shouldSkipRender, name, isValid, error, fieldState) => {
    const previousFieldError = get(_formState.errors, name);
    const shouldUpdateValid = _proxyFormState.isValid && _formState.isValid !== isValid;
    if (props.delayError && error) {
      delayErrorCallback = delayErrorCallback || debounce(updateErrors, props.delayError);
      delayErrorCallback(name, error);
    } else {
      clearTimeout(timer);
      error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
    }
    if (((error ? !deepEqual(previousFieldError, error) : previousFieldError) || !isEmptyObject(fieldState) || shouldUpdateValid) && !shouldSkipRender) {
      const updatedFormState = Object.assign(Object.assign(Object.assign({}, fieldState), shouldUpdateValid ? { isValid } : {}), { errors: _formState.errors, name });
      _formState = Object.assign(Object.assign({}, _formState), updatedFormState);
      _subjects.state.next(updatedFormState);
    }
    validateFields[name]--;
    if (_proxyFormState.isValidating && !validateFields[name]) {
      _subjects.state.next({
        isValidating: false
      });
      validateFields = {};
    }
  };
  const _executeSchema = async (name) => _options.resolver ? await _options.resolver(Object.assign({}, _formValues), _options.context, getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation)) : {};
  const executeSchemaAndUpdateState = async (names) => {
    const { errors } = await _executeSchema();
    if (names) {
      for (const name of names) {
        const error = get(errors, name);
        error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
      }
    } else {
      _formState.errors = errors;
    }
    return errors;
  };
  const executeBuildInValidation = async (fields, shouldOnlyCheckValid, context = {
    valid: true
  }) => {
    for (const name in fields) {
      const field = fields[name];
      if (field) {
        const fieldReference = field._f;
        const fieldValue = omit(field, "_f");
        if (fieldReference) {
          const fieldError = await validateField(field, get(_formValues, fieldReference.name), shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation);
          if (fieldError[fieldReference.name]) {
            context.valid = false;
            if (shouldOnlyCheckValid) {
              break;
            }
          }
          if (!shouldOnlyCheckValid) {
            fieldError[fieldReference.name] ? set(_formState.errors, fieldReference.name, fieldError[fieldReference.name]) : unset(_formState.errors, fieldReference.name);
          }
        }
        fieldValue && await executeBuildInValidation(fieldValue, shouldOnlyCheckValid, context);
      }
    }
    return context.valid;
  };
  const _removeUnmounted = () => {
    for (const name of _names.unMount) {
      const field = get(_fields, name);
      field && (field._f.refs ? field._f.refs.every((ref) => !live(ref)) : !live(field._f.ref)) && unregister(name);
    }
    _names.unMount = new Set();
  };
  const _getDirty = (name, data) => (name && data && set(_formValues, name, data), !deepEqual(getValues(), _defaultValues));
  const _getWatch = (names, defaultValue, isGlobal) => {
    const fieldValues = Object.assign({}, _stateFlags.mount ? _formValues : isUndefined(defaultValue) ? _defaultValues : isString(names) ? { [names]: defaultValue } : defaultValue);
    return generateWatchOutput(names, _names, fieldValues, isGlobal);
  };
  const _getFieldArray = (name) => compact(get(_stateFlags.mount ? _formValues : _defaultValues, name, props.shouldUnregister ? get(_defaultValues, name, []) : []));
  const setFieldValue = (name, value, options = {}) => {
    const field = get(_fields, name);
    let fieldValue = value;
    if (field) {
      const fieldReference = field._f;
      if (fieldReference) {
        !fieldReference.disabled && set(_formValues, name, getFieldValueAs(value, fieldReference));
        fieldValue = isWeb && isHTMLElement(fieldReference.ref) && isNullOrUndefined(value) ? "" : value;
        if (isMultipleSelect(fieldReference.ref)) {
          [...fieldReference.ref.options].forEach((selectRef) => selectRef.selected = fieldValue.includes(selectRef.value));
        } else if (fieldReference.refs) {
          if (isCheckBoxInput(fieldReference.ref)) {
            fieldReference.refs.length > 1 ? fieldReference.refs.forEach((checkboxRef) => checkboxRef.checked = Array.isArray(fieldValue) ? !!fieldValue.find((data) => data === checkboxRef.value) : fieldValue === checkboxRef.value) : fieldReference.refs[0] && (fieldReference.refs[0].checked = !!fieldValue);
          } else {
            fieldReference.refs.forEach((radioRef) => radioRef.checked = radioRef.value === fieldValue);
          }
        } else if (!isFileInput(fieldReference.ref)) {
          fieldReference.ref.value = fieldValue;
          if (!fieldReference.ref.type) {
            _subjects.watch.next({
              name
            });
          }
        }
      }
    }
    (options.shouldDirty || options.shouldTouch) && updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);
    options.shouldValidate && trigger(name);
  };
  const setValues = (name, value, options) => {
    for (const fieldKey in value) {
      const fieldValue = value[fieldKey];
      const fieldName = `${name}.${fieldKey}`;
      const field = get(_fields, fieldName);
      (_names.array.has(name) || !isPrimitive(fieldValue) || field && !field._f) && !isDateObject(fieldValue) ? setValues(fieldName, fieldValue, options) : setFieldValue(fieldName, fieldValue, options);
    }
  };
  const setValue = (name, value, options = {}) => {
    const field = get(_fields, name);
    const isFieldArray = _names.array.has(name);
    const cloneValue = cloneObject(value);
    set(_formValues, name, cloneValue);
    if (isFieldArray) {
      _subjects.array.next({
        name,
        values: _formValues
      });
      if ((_proxyFormState.isDirty || _proxyFormState.dirtyFields) && options.shouldDirty) {
        _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
        _subjects.state.next({
          name,
          dirtyFields: _formState.dirtyFields,
          isDirty: _getDirty(name, cloneValue)
        });
      }
    } else {
      field && !field._f && !isNullOrUndefined(cloneValue) ? setValues(name, cloneValue, options) : setFieldValue(name, cloneValue, options);
    }
    isWatched(name, _names) && _subjects.state.next({});
    _subjects.watch.next({
      name
    });
  };
  const onChange = async (event) => {
    const target = event.target;
    let name = target.name;
    const field = get(_fields, name);
    if (field) {
      let error;
      let isValid;
      const fieldValue = target.type ? getFieldValue(field._f) : getEventValue(event);
      const isBlurEvent = event.type === EVENTS.BLUR;
      const shouldSkipValidation = !hasValidation(field._f) && !_options.resolver && !get(_formState.errors, name) && !field._f.deps || skipValidation(isBlurEvent, get(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);
      const watched = isWatched(name, _names, isBlurEvent);
      set(_formValues, name, fieldValue);
      if (isBlurEvent) {
        field._f.onBlur && field._f.onBlur(event);
      } else if (field._f.onChange) {
        field._f.onChange(event);
      }
      const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent, false);
      const shouldRender = !isEmptyObject(fieldState) || watched;
      !isBlurEvent && _subjects.watch.next({
        name,
        type: event.type
      });
      if (shouldSkipValidation) {
        return shouldRender && _subjects.state.next(Object.assign({ name }, watched ? {} : fieldState));
      }
      !isBlurEvent && watched && _subjects.state.next({});
      validateFields[name] = validateFields[name] ? 1 : 1;
      _proxyFormState.isValidating && _subjects.state.next({
        isValidating: true
      });
      if (_options.resolver) {
        const { errors } = await _executeSchema([name]);
        const previousErrorLookupResult = schemaErrorLookup(_formState.errors, _fields, name);
        const errorLookupResult = schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);
        error = errorLookupResult.error;
        name = errorLookupResult.name;
        isValid = isEmptyObject(errors);
      } else {
        error = (await validateField(field, get(_formValues, name), shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];
        isValid = await _updateValid(true);
      }
      field._f.deps && trigger(field._f.deps);
      shouldRenderByError(false, name, isValid, error, fieldState);
    }
  };
  const trigger = async (name, options = {}) => {
    let isValid;
    let validationResult;
    const fieldNames = convertToArrayPayload(name);
    _subjects.state.next({
      isValidating: true
    });
    if (_options.resolver) {
      const errors = await executeSchemaAndUpdateState(isUndefined(name) ? name : fieldNames);
      isValid = isEmptyObject(errors);
      validationResult = name ? !fieldNames.some((name2) => get(errors, name2)) : isValid;
    } else if (name) {
      validationResult = (await Promise.all(fieldNames.map(async (fieldName) => {
        const field = get(_fields, fieldName);
        return await executeBuildInValidation(field && field._f ? { [fieldName]: field } : field);
      }))).every(Boolean);
      !(!validationResult && !_formState.isValid) && _updateValid();
    } else {
      validationResult = isValid = await executeBuildInValidation(_fields);
    }
    _subjects.state.next(Object.assign(Object.assign(Object.assign({}, !isString(name) || _proxyFormState.isValid && isValid !== _formState.isValid ? {} : { name }), _options.resolver ? { isValid } : {}), { errors: _formState.errors, isValidating: false }));
    options.shouldFocus && !validationResult && focusFieldBy(_fields, (key) => get(_formState.errors, key), name ? fieldNames : _names.mount);
    return validationResult;
  };
  const getValues = (fieldNames) => {
    const values = Object.assign(Object.assign({}, _defaultValues), _stateFlags.mount ? _formValues : {});
    return isUndefined(fieldNames) ? values : isString(fieldNames) ? get(values, fieldNames) : fieldNames.map((name) => get(values, name));
  };
  const _getFieldState = (name, formState) => ({
    invalid: !!get((formState || _formState).errors, name),
    isDirty: get((formState || _formState).dirtyFields, name),
    isTouched: get((formState || _formState).touchedFields, name),
    error: get((formState || _formState).errors, name)
  });
  const clearErrors = (name) => {
    name ? convertToArrayPayload(name).forEach((inputName) => unset(_formState.errors, inputName)) : _formState.errors = {};
    _subjects.state.next({
      errors: _formState.errors
    });
  };
  const setError = (name, error, options) => {
    const ref = (get(_fields, name, { _f: {} })._f || {}).ref;
    set(_formState.errors, name, Object.assign(Object.assign({}, error), { ref }));
    _subjects.state.next({
      name,
      errors: _formState.errors,
      isValid: false
    });
    options && options.shouldFocus && ref && ref.focus && ref.focus();
  };
  const watch = (name, defaultValue) => isFunction(name) ? _subjects.watch.subscribe({
    next: (info) => name(_getWatch(void 0, defaultValue), info)
  }) : _getWatch(name, defaultValue, true);
  const unregister = (name, options = {}) => {
    for (const fieldName of name ? convertToArrayPayload(name) : _names.mount) {
      _names.mount.delete(fieldName);
      _names.array.delete(fieldName);
      if (get(_fields, fieldName)) {
        if (!options.keepValue) {
          unset(_fields, fieldName);
          unset(_formValues, fieldName);
        }
        !options.keepError && unset(_formState.errors, fieldName);
        !options.keepDirty && unset(_formState.dirtyFields, fieldName);
        !options.keepTouched && unset(_formState.touchedFields, fieldName);
        !_options.shouldUnregister && !options.keepDefaultValue && unset(_defaultValues, fieldName);
      }
    }
    _subjects.watch.next({});
    _subjects.state.next(Object.assign(Object.assign({}, _formState), !options.keepDirty ? {} : { isDirty: _getDirty() }));
    !options.keepIsValid && _updateValid();
  };
  const register = (name, options = {}) => {
    let field = get(_fields, name);
    const disabledIsDefined = isBoolean(options.disabled);
    set(_fields, name, {
      _f: Object.assign(Object.assign(Object.assign({}, field && field._f ? field._f : { ref: { name } }), { name, mount: true }), options)
    });
    _names.mount.add(name);
    field ? disabledIsDefined && set(_formValues, name, options.disabled ? void 0 : get(_formValues, name, getFieldValue(field._f))) : updateValidAndValue(name, true, options.value);
    return Object.assign(Object.assign(Object.assign({}, disabledIsDefined ? { disabled: options.disabled } : {}), _options.shouldUseNativeValidation ? {
      required: !!options.required,
      min: getRuleValue(options.min),
      max: getRuleValue(options.max),
      minLength: getRuleValue(options.minLength),
      maxLength: getRuleValue(options.maxLength),
      pattern: getRuleValue(options.pattern)
    } : {}), {
      name,
      onChange,
      onBlur: onChange,
      ref: (ref) => {
        if (ref) {
          register(name, options);
          field = get(_fields, name);
          const fieldRef = isUndefined(ref.value) ? ref.querySelectorAll ? ref.querySelectorAll("input,select,textarea")[0] || ref : ref : ref;
          const radioOrCheckbox = isRadioOrCheckbox(fieldRef);
          const refs = field._f.refs || [];
          if (radioOrCheckbox ? refs.find((option) => option === fieldRef) : fieldRef === field._f.ref) {
            return;
          }
          set(_fields, name, {
            _f: Object.assign(Object.assign({}, field._f), radioOrCheckbox ? {
              refs: refs.concat(fieldRef).filter(live),
              ref: { type: fieldRef.type, name }
            } : { ref: fieldRef })
          });
          updateValidAndValue(name, false, void 0, fieldRef);
        } else {
          field = get(_fields, name, {});
          if (field._f) {
            field._f.mount = false;
          }
          (_options.shouldUnregister || options.shouldUnregister) && !(isNameInFieldArray(_names.array, name) && _stateFlags.action) && _names.unMount.add(name);
        }
      }
    });
  };
  const handleSubmit = (onValid, onInvalid) => async (e) => {
    if (e) {
      e.preventDefault && e.preventDefault();
      e.persist && e.persist();
    }
    let hasNoPromiseError = true;
    let fieldValues = _options.shouldUnregister ? cloneObject(_formValues) : Object.assign({}, _formValues);
    _subjects.state.next({
      isSubmitting: true
    });
    try {
      if (_options.resolver) {
        const { errors, values } = await _executeSchema();
        _formState.errors = errors;
        fieldValues = values;
      } else {
        await executeBuildInValidation(_fields);
      }
      if (isEmptyObject(_formState.errors) && Object.keys(_formState.errors).every((name) => get(fieldValues, name))) {
        _subjects.state.next({
          errors: {},
          isSubmitting: true
        });
        await onValid(fieldValues, e);
      } else {
        onInvalid && await onInvalid(_formState.errors, e);
        _options.shouldFocusError && focusFieldBy(_fields, (key) => get(_formState.errors, key), _names.mount);
      }
    } catch (err) {
      hasNoPromiseError = false;
      throw err;
    } finally {
      _formState.isSubmitted = true;
      _subjects.state.next({
        isSubmitted: true,
        isSubmitting: false,
        isSubmitSuccessful: isEmptyObject(_formState.errors) && hasNoPromiseError,
        submitCount: _formState.submitCount + 1,
        errors: _formState.errors
      });
    }
  };
  const resetField = (name, options = {}) => {
    if (get(_fields, name)) {
      if (isUndefined(options.defaultValue)) {
        setValue(name, get(_defaultValues, name));
      } else {
        setValue(name, options.defaultValue);
        set(_defaultValues, name, options.defaultValue);
      }
      if (!options.keepTouched) {
        unset(_formState.touchedFields, name);
      }
      if (!options.keepDirty) {
        unset(_formState.dirtyFields, name);
        _formState.isDirty = options.defaultValue ? _getDirty(name, get(_defaultValues, name)) : _getDirty();
      }
      if (!options.keepError) {
        unset(_formState.errors, name);
        _proxyFormState.isValid && _updateValid();
      }
      _subjects.state.next(Object.assign({}, _formState));
    }
  };
  const reset = (formValues, keepStateOptions = {}) => {
    const updatedValues = formValues || _defaultValues;
    const cloneUpdatedValues = cloneObject(updatedValues);
    const values = formValues && !isEmptyObject(formValues) ? cloneUpdatedValues : _defaultValues;
    if (!keepStateOptions.keepDefaultValues) {
      _defaultValues = updatedValues;
    }
    if (!keepStateOptions.keepValues) {
      if (isWeb && isUndefined(formValues)) {
        for (const name of _names.mount) {
          const field = get(_fields, name);
          if (field && field._f) {
            const fieldReference = Array.isArray(field._f.refs) ? field._f.refs[0] : field._f.ref;
            try {
              isHTMLElement(fieldReference) && fieldReference.closest("form").reset();
              break;
            } catch (_a) {
            }
          }
        }
      }
      _formValues = props.shouldUnregister ? keepStateOptions.keepDefaultValues ? cloneObject(_defaultValues) : {} : cloneUpdatedValues;
      _fields = {};
      _subjects.array.next({
        values
      });
      _subjects.watch.next({
        values
      });
    }
    _names = {
      mount: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
      watchAll: false,
      focus: ""
    };
    _stateFlags.mount = !_proxyFormState.isValid || !!keepStateOptions.keepIsValid;
    _stateFlags.watch = !!props.shouldUnregister;
    _subjects.state.next({
      submitCount: keepStateOptions.keepSubmitCount ? _formState.submitCount : 0,
      isDirty: keepStateOptions.keepDirty ? _formState.isDirty : keepStateOptions.keepDefaultValues ? !deepEqual(formValues, _defaultValues) : false,
      isSubmitted: keepStateOptions.keepIsSubmitted ? _formState.isSubmitted : false,
      dirtyFields: keepStateOptions.keepDirty ? _formState.dirtyFields : keepStateOptions.keepDefaultValues && formValues ? Object.entries(formValues).reduce((previous, [key, value]) => Object.assign(Object.assign({}, previous), { [key]: value !== get(_defaultValues, key) }), {}) : {},
      touchedFields: keepStateOptions.keepTouched ? _formState.touchedFields : {},
      errors: keepStateOptions.keepErrors ? _formState.errors : {},
      isSubmitting: false,
      isSubmitSuccessful: false
    });
  };
  const setFocus = (name) => {
    const field = get(_fields, name)._f;
    (field.ref.focus ? field.ref : field.refs[0]).focus();
  };
  return {
    control: {
      register,
      unregister,
      _executeSchema,
      _getWatch,
      _getDirty,
      _updateValid,
      _removeUnmounted,
      _updateFieldArray,
      _getFieldArray,
      _subjects,
      _proxyFormState,
      get _fields() {
        return _fields;
      },
      set _fields(value) {
        _fields = value;
      },
      get _formValues() {
        return _formValues;
      },
      set _formValues(value) {
        _formValues = value;
      },
      get _stateFlags() {
        return _stateFlags;
      },
      set _stateFlags(value) {
        _stateFlags = value;
      },
      get _defaultValues() {
        return _defaultValues;
      },
      set _defaultValues(value) {
        _defaultValues = value;
      },
      get _names() {
        return _names;
      },
      set _names(value) {
        _names = value;
      },
      get _formState() {
        return _formState;
      },
      set _formState(value) {
        _formState = value;
      },
      get _options() {
        return _options;
      },
      set _options(value) {
        _options = Object.assign(Object.assign({}, _options), value);
      }
    },
    trigger,
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    reset,
    resetField,
    clearErrors,
    unregister,
    setError,
    setFocus,
    _getFieldState
  };
}
function useForm(props = {}) {
  const _formControl = import_react.default.useRef();
  const [formState, updateFormState] = import_react.default.useState({
    isDirty: false,
    isValidating: false,
    dirtyFields: {},
    isSubmitted: false,
    submitCount: 0,
    touchedFields: {},
    isSubmitting: false,
    isSubmitSuccessful: false,
    isValid: false,
    errors: {}
  });
  if (_formControl.current) {
    _formControl.current.control._options = props;
  } else {
    _formControl.current = Object.assign(Object.assign({}, createFormControl(props)), { formState });
  }
  const control = _formControl.current.control;
  const callback = import_react.default.useCallback((value) => {
    if (shouldRenderFormState(value, control._proxyFormState, true)) {
      control._formState = Object.assign(Object.assign({}, control._formState), value);
      updateFormState(Object.assign({}, control._formState));
    }
  }, [control]);
  useSubscribe({
    subject: control._subjects.state,
    callback
  });
  import_react.default.useEffect(() => {
    if (!control._stateFlags.mount) {
      control._proxyFormState.isValid && control._updateValid();
      control._stateFlags.mount = true;
    }
    if (control._stateFlags.watch) {
      control._stateFlags.watch = false;
      control._subjects.state.next({});
    }
    control._removeUnmounted();
  });
  _formControl.current.formState = getProxyFormState(formState, control._proxyFormState);
  return _formControl.current;
}

// app/routes/contact.jsx
var import_react2 = __toModule(require_react());

// node_modules/@emailjs/browser/es/index.js
init_react();

// node_modules/@emailjs/browser/es/methods/init/init.js
init_react();

// node_modules/@emailjs/browser/es/store/store.js
init_react();
var store = {
  _origin: "https://api.emailjs.com"
};

// node_modules/@emailjs/browser/es/methods/init/init.js
var init = (userID, origin = "https://api.emailjs.com") => {
  store._userID = userID;
  store._origin = origin;
};

// node_modules/@emailjs/browser/es/methods/send/send.js
init_react();

// node_modules/@emailjs/browser/es/utils/validateParams.js
init_react();
var validateParams = (userID, serviceID, templateID) => {
  if (!userID) {
    throw "The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";
  }
  if (!serviceID) {
    throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
  }
  if (!templateID) {
    throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
  }
  return true;
};

// node_modules/@emailjs/browser/es/api/sendPost.js
init_react();

// node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js
init_react();
var EmailJSResponseStatus = class {
  constructor(httpResponse) {
    this.status = httpResponse.status;
    this.text = httpResponse.responseText;
  }
};

// node_modules/@emailjs/browser/es/api/sendPost.js
var sendPost = (url, data, headers = {}) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", ({ target }) => {
      const responseStatus = new EmailJSResponseStatus(target);
      if (responseStatus.status === 200 || responseStatus.text === "OK") {
        resolve(responseStatus);
      } else {
        reject(responseStatus);
      }
    });
    xhr.addEventListener("error", ({ target }) => {
      reject(new EmailJSResponseStatus(target));
    });
    xhr.open("POST", store._origin + url, true);
    Object.keys(headers).forEach((key) => {
      xhr.setRequestHeader(key, headers[key]);
    });
    xhr.send(data);
  });
};

// node_modules/@emailjs/browser/es/methods/send/send.js
var send = (serviceID, templateID, templatePrams, userID) => {
  const uID = userID || store._userID;
  validateParams(uID, serviceID, templateID);
  const params = {
    lib_version: "3.4.0",
    user_id: uID,
    service_id: serviceID,
    template_id: templateID,
    template_params: templatePrams
  };
  return sendPost("/api/v1.0/email/send", JSON.stringify(params), {
    "Content-type": "application/json"
  });
};

// node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js
init_react();
var findHTMLForm = (form) => {
  let currentForm;
  if (typeof form === "string") {
    currentForm = document.querySelector(form);
  } else {
    currentForm = form;
  }
  if (!currentForm || currentForm.nodeName !== "FORM") {
    throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
  }
  return currentForm;
};
var sendForm = (serviceID, templateID, form, userID) => {
  const uID = userID || store._userID;
  const currentForm = findHTMLForm(form);
  validateParams(uID, serviceID, templateID);
  const formData = new FormData(currentForm);
  formData.append("lib_version", "3.4.0");
  formData.append("service_id", serviceID);
  formData.append("template_id", templateID);
  formData.append("user_id", uID);
  return sendPost("/api/v1.0/email/send-form", formData);
};

// node_modules/@emailjs/browser/es/index.js
var es_default = {
  init,
  send,
  sendForm
};

// app/routes/contact.jsx
function Contact() {
  const form = (0, import_react2.useRef)();
  const sendEmail = (e) => {
    e.preventDefault();
    es_default.sendForm("service_9vu0v1l", "template_h1565se", form.current, "user_kvieQsDGY538Pkqyxt9JA").then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  };
  const transition = useTransition();
  const actionData = useActionData();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example"));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Contact Me"), /* @__PURE__ */ React.createElement(Form, {
    className: "form-control",
    ref: form,
    onSubmit: sendEmail
  }, /* @__PURE__ */ React.createElement("label", null, "Your name:", " ", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "user_name",
    defaultValue: "name",
    defaultValue: actionData ? actionData.values.name : void 0
  })), /* @__PURE__ */ React.createElement("label", null, "Your email:", " ", /* @__PURE__ */ React.createElement("input", {
    type: "email",
    name: "user_email",
    defaultValue: "name",
    defaultValue: actionData ? actionData.values.name : void 0
  })), /* @__PURE__ */ React.createElement("label", null, "Your message: "), /* @__PURE__ */ React.createElement("textarea", {
    name: "message"
  }), /* @__PURE__ */ React.createElement("button", {
    type: "SUBMIT",
    value: "Send",
    className: "btn btn-block"
  }, "Send", transition.submission ? "Sending..." : "Sent"))));
}
export {
  Contact as default
};
//# sourceMappingURL=/build/routes/contact-H25JFCCS.js.map
