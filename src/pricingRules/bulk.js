const bulk = ({item, bulkNumber, bulkPrice, unitPrice}) => (nbrItems) => {
    let nbr = nbrItems[item]
    
    if (nbr === bulkNumber) {
        return unitPrice - (unitPrice - bulkPrice) * bulkNumber
    } else if (nbr > bulkNumber) { 
        return bulkPrice
    } else {
        return unitPrice
    }
}

export default bulk
