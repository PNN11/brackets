module.exports = function check(str, bracketsConfig) {
  // your solution
    let openBracket = [];
    let closeBracket = [];
    let result = [];

    for (i = 0; i < bracketsConfig.length; i++) {
        openBracket.push(bracketsConfig[i][0]);
        closeBracket.push(bracketsConfig[i][1]);
    }

    for (i = 0; i < str.length; i++) {
        let bracket = str[i];
        if (openBracket.indexOf(bracket) !== -1) {
            if (result[result.length - 1] !== closeBracket.indexOf(bracket)) {
                result.push(openBracket.indexOf(bracket));
                continue
            }
        }

        if (closeBracket.indexOf(bracket) !== -1) {
            let last = result.pop();
            if (closeBracket.indexOf(bracket) !== last) {
                return false
            }
        }
    }

    return result.length === 0
}
