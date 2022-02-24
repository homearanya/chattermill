const config = {
  individual: [
    {
      id: "value",
      label: "Purchase Value",
      type: "text",
      placeholder: "0.00",
      value: "",
      tooltip: "The amount charged to the customer for each order",
    },
    {
      id: "yearly",
      label: "Purchases per Year",
      type: "number",
      placeholder: "0",
      value: "",
      tooltip: "How often a customer purchases an order",
    },
    {
      id: "duration",
      label: "Customer Duration (Years)",
      type: "number",
      placeholder: "0",
      value: "",
      tooltip:
        "The amount of time a customer actively purchases from a business",
    },
  ],
  average: [
    {
      id: "revenue",
      label: "Total Annual Revenue",
      type: "text",
      placeholder: "0.00",
      value: "",
      tooltip: "The total revenue from the past year",
    },
    {
      id: "purchases",
      label: "Number of Purchases",
      type: "number",
      placeholder: "0",
      value: "",
      tooltip: "The average number of orders from customers last year",
    },
    {
      id: "customers",
      label: "Number of Customers",
      type: "number",
      placeholder: "0",
      value: "",
      tooltip:
        "The total number of customers last year who purchased from your company",
    },
    {
      id: "lifespans",
      label: "Average of Customer Lifespans",
      type: "number",
      placeholder: "0",
      value: "",
      tooltip:
        "How many years your customers have consistently purchased from your business",
    },
  ],
}

export default config
