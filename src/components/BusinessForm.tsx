import { FormWrapper } from "./FormWrapper"

type AddressData = {
  businessName: string
  businessAddress: string
  businessEmail: string
}

type BusinessFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void
}

export function BusinessForm({
  businessName,
  businessAddress,
  businessEmail,
  updateFields,
}: BusinessFormProps) {
  return (
    <FormWrapper title="Company Details">
      <label>Company Name</label>
      <input
        autoFocus
        required
        type="text"
        value={businessName}
        onChange={e => updateFields({ businessName: e.target.value })}
      />
      <label>Company Address</label>
      <input
        required
        type="text"
        value={businessAddress}
        onChange={e => updateFields({ businessAddress: e.target.value })}
      />
      <label>Company Email</label>
      <input
        required
        type="email"
        value={businessEmail}
        onChange={e => updateFields({ businessEmail: e.target.value })}
      />
    </FormWrapper>
  )
}