let count1 = 0;
setTimeout(() => {
    console.log("base.count:", ++count1);
}, 500)

module.exports.count1 = count1;