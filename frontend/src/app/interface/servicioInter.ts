export interface ServicioInter {
    serviceType: String,
    noService: String,
    serviceOwner?: String,
    expirationDate?: Date,
    issueDate?: Date,
    invoiceSeries?: String,
    balance?: number,
    descriptionService?: String
}
