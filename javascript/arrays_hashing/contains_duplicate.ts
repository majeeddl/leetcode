

export const containsDuplicate = (nums)=>{
    const newSet = new Set(nums)

    const isEqual = newSet.size === nums.length

    return !isEqual
}