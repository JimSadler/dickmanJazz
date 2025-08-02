/**
 * Checks if a value exists.
 * Returns false for null, undefined, empty strings, empty arrays, and empty objects.
 * @param {*} value - The value to check.
 * @returns {boolean} Whether the value exists.
 */
export function exists(value) {
  // if null or undefined
  if (value === null || value === undefined) {
    return false
  }

  // if string
  if (typeof value === 'string') {
    return value.trim().length > 0
  }

  // if array
  if (Array.isArray(value)) {
    return value.length > 0
  }

  // if date
  if (value instanceof Date) {
    return true
  }

  // if object
  if (typeof value === 'object') {
    return Object.keys(value).length > 0
  }

  return value !== undefined && value !== null && value !== ''
}

// if object has all empty values
export function isEmptyObject(obj) {
  return Object.values(obj).every((v) => !exists(v))
}

/**
 * Checks if a value is a non-empty string.
 * @param {*} value - The value to check.
 * @returns {boolean} Whether the value is a non-empty string.
 */
export function validString(value) {
  return exists(value) && typeof value === 'string'
}

/**
 * Returns the help email address.
 * Returns a test email address if the window origin includes "int", "localhost", or "uat".
 * Otherwise, returns the production email address.
 * @returns {string} The help email address.
 */
export function getHelpEmail() {
  if (
    window.origin?.includes('int') ||
    window.origin?.includes('localhost') ||
    window.origin?.includes('uat')
  ) {
    return 'dlap-test@nih.gov'
  } else {
    return 'dlap@nih.gov'
  }
}

/*
 * Combines two objects, overwriting values in the first object with values from the second object.
 * @param {Object} obj1 - The first object.
 * @param {Object} obj2 - The second object.
 * @returns {Object} The combined object.
 */
export function combineObjects(obj1, obj2) {
  return { ...obj1, ...obj2 }
}

/**
 * Removes empty values from an object.
 * @param {Object} obj - The object.
 * @returns {Object} The object without empty values.
 */
export function removeEmptyValues(obj) {
  // console.log('removeEmptyValues', obj);
  const newObj = {}
  Object.keys(obj).forEach((key) => {
    if (exists(obj[key])) {
      newObj[key] = obj[key]
    }
  })
  return newObj
}

export function getItemsForFilter(data = [], key) {
  if (!Array.isArray(data)) {
    return []
  }

  return [
    ...new Set(data?.filter((item) => exists(get(item, key)))?.map((item) => get(item, key)) ?? []),
  ]
}

export function convertToInt(value) {
  if (exists(value)) {
    return parseInt(value)
  }
  return null
}

export function getLatestIndexData(data = []) {
  if (!Array.isArray(data)) {
    return 0
  }

  return data[data.length - 1]
}

export function bytesToSize(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  if (bytes === 0) return '0 Byte'
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i]
}

export const isObject = (object) => {
  return object != null && typeof object === 'object'
}

export const isEmptyOrEquivalent = (value) => {
  return value === undefined || value === null || value === ''
}

export function loadingTimeout(emit, ref, state, time) {
  setTimeout(() => {
    emit(ref, state)
  }, time)
}

export function isDeepEqual(object1, object2) {
  if (exists(object1) && !exists(object2)) return false

  if (!exists(object1) && exists(object2)) return false

  if (!exists(object1) && !exists(object2)) return true

  const objKeys1 = Object.keys(object1)
  const objKeys2 = Object.keys(object2)

  if (objKeys1?.length !== objKeys2?.length) return false

  for (var key of objKeys1) {
    const value1 = object1[key]
    const value2 = object2[key]

    // Check if both values are either null, undefined, or empty strings
    if (isEmptyOrEquivalent(value1) && isEmptyOrEquivalent(value2)) {
      continue
    }

    const isObjects = isObject(value1) && isObject(value2)

    if ((isObjects && !isDeepEqual(value1, value2)) || (!isObjects && value1 !== value2)) {
      return false
    }
  }
  return true
}

/**
 * Compares two objects with special handling for dates and nested structures
 * @param {Object} obj1 - First object to compare
 * @param {Object} obj2 - Second object to compare
 * @returns {boolean} True if objects are equal according to comparison rules
 */
export function compareObjects(obj1, obj2) {
  const obj1Clone = cloneDeep(obj1)
  const obj2Clone = cloneDeep(obj2)

  // Check if both objects have the same keys
  const keys1 = Object.keys(obj1Clone)
  const keys2 = Object.keys(obj2Clone)
  if (keys1.length !== keys2.length || !keys1.every((key) => keys2.includes(key))) {
    return false
  }

  return keys1.every((key) => {
    // check for date
    if (isDayjsDate(obj1Clone[key]) || isDayjsDate(obj2Clone[key])) {
      obj1Clone[key] = formatDate(obj1Clone[key], 'YYYY-MM-DDTHH:mm:ssZ')
      obj2Clone[key] = formatDate(obj2Clone[key], 'YYYY-MM-DDTHH:mm:ssZ')

      // splice at T and compare
      return obj1Clone[key].split('T')[0] === obj2Clone[key].split('T')[0]
    }

    // check for array
    if (Array.isArray(obj1Clone[key])) {
      return obj1Clone[key].every((item, index) => {
        return isDeepEqual(item, obj2Clone[key]?.[index])
      })
    }

    // check for object
    if (isObject(obj1Clone[key])) {
      return isDeepEqual(obj1Clone[key], obj2Clone[key])
    }

    return obj1Clone[key] === obj2Clone[key]
  })
}

export function compareArraysOfObjects(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }

  return arr1.every((item, index) => {
    return isDeepEqual(item, arr2[index])
  })
}

export function compareStrings(str1, str2) {
  return isDeepEqual(str1, str2)
}

export function compareNumbers(num1, num2) {
  return isDeepEqual(num1, num2)
}

export function removeDuplicates(arr) {
  return [...new Set(arr)]
}

export function sortByDate(arrA, arrB) {
  if (!arrA || !arrB) return false
  let combinedArr = [...arrA, ...arrB]
  let sorted = combinedArr.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
  return sorted
}

/**
 * Converts a file size in bytes to a human-readable string
 * @param {number} size - Size in bytes
 * @returns {string} Human-readable file size (e.g., "1.5 MB")
 */
export function getFileSize(size) {
  const i = Math.floor(Math.log(size) / Math.log(1024))
  return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i]
}
