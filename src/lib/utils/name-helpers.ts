export function makeRelativeName(parentName: string, name: string) {
    var prefix = parentName + "-";
    if (name.startsWith(prefix)) {
        return name.substring(prefix.length);
    }
    return name;
}