/**
 * 字符串重复序列数组
 * @augments String
 * anagrams（"abc"） -> ['abc','acb','bac','bca','cab','cba']
 */
const anagrams = str => {
    if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
    return str.split('').reduce((acc, letter, i) =>
        acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), []);
};

/**
 * 数组平均数
 * @augments Array
 * average([3,41,5])->16.333333333333332
 */
const average = arr => arr.reduce((acc, val) => acc + val, 0) / arr.length;


/**
 * 大写每个单词的首字母
 * @augments String
 * capitalizeEveryWord('hello world!') -> 'Hello World!'
 */
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

/**
 * 固定首字母大写
 * @augments String
 * @augments Boolean  default false
 * capitalize('myName', true) -> 'Myname'
 */
const capitalize = (str, lowerRest = false) => str.slice(0, 1).toUpperCase() + (lowerRest ? str.slice(1).toLowerCase() : str.slice(1));


/**
 * 检查回文
 * @augments String
 * palindrome('taco cat') -> true
 */
const palindrome = str => {
    const s = str.toLowerCase().replace(/[\W_]/g, '');
    return s === s.split('').reverse().join("");
};

/**
 * 计数数组中值得出现次数
 * @augments Array
 * @augments String/Number
 * countOccurrences([1,1,2,1,2,3], 1) -> 3
 */
const countOccurrences = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);

/**
 * Curry
 * 使用递归。如果提供的参数（args）数量足够，则调用传递函数f，否则返回一个curried函数f。
 * @augments  Function
 * @augments Number
 * curry(Math.pow)(2)(10) -> 1024
 * curry(Math.min, 3)(10)(50)(2) -> 2
 */
const curry = (fn, arity = fn.length, ...args) => arity <= args ? fn(...args) : curry.bind(null, fn, arity, ...args);

/**
 * 深拷贝合并数组
 * @augments Array
 * deepFlatten([1,[2],[[3],4],5]) -> [1,2,3,4,5]
 */
const deepFlatten = arr => arr.reduce((a, v) => a.concat(Array.isArray(v) ? deepFlatten(v) : v), []);

/**
 * 数组之间区别比较
 * @augments Array
 * difference([1,2,3], [1,2]) -> [3]
 */
const difference = (a, b) => {
    const s = new Set(b);
    return a.filter(x => !s.has(x));
};

/**
 * 数组间的相似性
 * @augments Array
 * similarity([1,2,3], [1,2,4]) -> [1,2]
 */
const similarity = (arr, val) => arr.filter(v => val.includes(v));


/**
 * 两点之间的距离
 * @augments Number
 * distance(1,1, 2,3) -> 2.23606797749979
 */
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

/**
 * 获取滚动的位置
 * @augments String
 * getScrollPos() -> {x: 0, y: 200}
 */
const getScrollPos = (el = window) => ({
    x: (el.pageXOffset !== undefined) ? el.pageXOffset : el.scrollLeft,
    y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop
});

/**
 * 转义正则表达式
 * @augments String
 * escapeRegExp('(test)') -> \\(test\\)
 */
const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * 最大公约数
 * @augments Number
 * 使用递归。基本情况是当y等于0时。在这种情况下，返回x。否则，返回y的GCD和x / y的其余部分。
 * gcd (8, 36) -> 4
 */
const gcd = (x, y) => !y ? x : gcd(y, x % y);

/**
 * 阶乘
 * @augments Number
 * factorial(6) -> 720
 */
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);

/**
 * 斐波那契数组生成
 * @augments Number
 * 创建一个特定长度的空数组，初始化前两个值（0和1）。使用Array.reduce（）向数组中添加值，后面的一个数等于前面两个数相加之和（前两个除外）。
 * fibonacci(9) -> [ 0, 1, 1, 2, 3, 5, 8, 13, 21 ]
 */
const fibonacci = n => Array(n).fill(0).reduce((acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i), []);

/**
 * 过滤数组的非唯一值
 * @augments Array
 *
 * filterNonUnique([1,2,2,3,4,4,5]) -> [1,3,5]
 */
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));


/**
 * 测试功能花费的时间
 * @augments Function
 * timeTaken(() => Math.pow(2, 10)) -> 1024
 * (logged): timeTaken: 0.02099609375ms
 */
const timeTaken = callback => {
    console.time("timeTaken");
    const r = callback();
    console.timeEnd("timeTaken");
    return r;
};

/**
 *  数组转键值对的对象
 *  @augments Array
 *  objectFromPairs([['a',1],['b',2]]) -> {a: 1, b: 2}
 */
const objectFromPairs = arr => arr.reduce((a, v) => (a[v[0]] = v[1], a), {});

/**
 * 数组全拆分
 * @augments Array
 *
 */
const powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);

/**
 * 范围内随机数
 * @augments Number
 * randomInRange(2,10) -> 6.0211363285087005
 */
const randomInRange = (min, max, floor = false) => floor ? Math.floor(Math.random() * (max - min + 1)) + min : Math.random() * (max - min) + min;

/**
 * 重定向到URL
 * @augments String
 *
 */
const redirect = (url, asLink = true) => asLink ? window.location.href = url : window.location.replace(url);

/**
 * 滚动到顶部
 *
 * scrollToTop()
 */
const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
};


console.log("test", randomInRange(4, 10, true));

