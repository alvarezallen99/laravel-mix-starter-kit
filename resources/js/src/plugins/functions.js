/**
 * MY HELPERS FUNCTIONS
 * Author & Developer Allen C. Alvarez
 */
export function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
