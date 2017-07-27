import {
  ClassifiedParsedSelectors
} from "css-blocks";
export function pathFromSpecifier(specifier: string) {
  return specifier.split(':')[1];
}

export function selectorCount(result: ClassifiedParsedSelectors) {
  let count = result.main.length;
  Object.keys(result.other).forEach((k) => {
    count += result.other[k].length;
  });
  return count;
}

export function parseSpecifier(specifier: string): { componentType: string; componentName: string; } | null {
  if (/^(component|template|stylesheet):(.*)$/.test(specifier)) {
    return {
      componentType: RegExp.$1,
      componentName: RegExp.$2
    };
  } else {
    return null;
  }
}