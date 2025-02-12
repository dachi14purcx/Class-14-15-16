function toCamelCase(str) {
    return str
        .split(/[-_]/)  // Split by both dash and underscore
        .map((word, index) => {
            // Capitalize the first letter of each word except the first one
            if (index === 0) {
                return word;
            } else {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }
        })
        .join('');  // Join all the words together
}