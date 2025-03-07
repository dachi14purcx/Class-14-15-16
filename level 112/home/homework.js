class StringHelper {
    static reverse(str) {
        return str.split('').reverse().join('');
    }

    static compareStrings(str1, str2) {
        let count = 0;
        const minLength = Math.min(str1.length, str2.length);
        for (let i = 0; i < minLength; i++) {
            if (str1[i] === str2[i]) {
                count++
            };
        }
        return count;
    }
}

class MathHelper {
    static PI = Math.PI;
    static E = Math.E;
    static DEFAULT_PRECISION = 3;

    static factorial(n) {
        if (n < 0) return undefined;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    static endsWith5Or0(num) {
        return num % 10 === 0 || num % 10 === 5;
    }

    static roundToNearest5Or0(num) {
        return Math.round(num / 5) * 5;
    }

    static roundToPrecision(num) {
        return parseFloat(num.toFixed(MathHelper.DEFAULT_PRECISION));
    }
}