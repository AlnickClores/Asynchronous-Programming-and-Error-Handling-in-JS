const isPalindrome = (word) => {
    word = word.toString().toUpperCase();
    let left = 0;
    let right = word.length - 1;
    
    while(left < right) {
        if(word[left] != word[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

word = "123racecar321";
res = isPalindrome(word);

if(res) {
    console.log("Word is Palindrome.")
} else {
    console.log("Word is not a Palindrome.")
}
