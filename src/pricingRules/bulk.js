const bulk = ({item, bulkNumber, bulkPrice, unitPrice}) => (items) => {
    let nbr = items
        .filter(i => i.code === item)
        .length + 1
    
    if (nbr === bulkNumber) {
        return unitPrice - (unitPrice - bulkPrice) * bulkNumber
    } else if (nbr > bulkNumber) { 
        return bulkPrice
    } else {
        return unitPrice
    }
}

export default bulk
