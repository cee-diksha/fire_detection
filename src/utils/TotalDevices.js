export const totalUnits = (allDevices, unit) => {
    console.log(allDevices, "devices")
    const result = allDevices.filter(item => item.node_type === unit && item.isDeleted === false)
    return result.length
}