//1번

function solution1(x) {
  if (x < 0) return false;
  
  const str = x.toString();
  const len = str.length;
  
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

//2번
function solution2(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const charCount = {};

  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of t) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }
  return true;
}

//3번
function solution3(s) {
  const stack = [];
  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (let char of s) {
    if (char in pairs) {
      stack.push(char);
    } else {
      const open = stack.pop();
      if (pairs[open] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

//4번
function solution4(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

//5번
function solution5(numbers, target) {
  let count = 0;

  function sum(index, current) {
    if (index === numbers.length) {
      if (current === target) {
        count++;
      }
      return;
    }

    sum(index + 1, current + numbers[index]);
    sum(index + 1, current - numbers[index]);
  }
  sum(0, 0);

  return count;
}

//6번
`SELECT
  s.학생명 AS s_name,
  su.수업명 AS su_name,
  su.학과 AS d_name,
  su.과목코드 AS su_code,
  p.교수명 AS p_name,
  p.담당과목코드 AS psu_code
FROM
  STUDENT s
JOIN
  SUBJECT su ON s.학과 = su.학과
JOIN
  PROFESSOR p ON su.과목코드 = p.담당과목코드`;