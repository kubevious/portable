/*** UNDER NO CIRCUMSTANCES DO NOT EDIT THIS FILE. THIS FILE IS COPIED                                    ***/
/*** FROM OSS UI. ANY CHANGES TO BE MADE IN KUBEVIOUS OSS UI.                                             ***/
/*** SOURCE: ../parser.git/src/utils/name-helpers.ts                                                      ***/

export function makeRelativeName(parentName: string, name: string) {
  var prefix = parentName + "-";
  if (name.startsWith(prefix)) {
    return name.substring(prefix.length);
  }
  return name;
}
