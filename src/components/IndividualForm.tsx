import { FormWrapper } from "./FormWrapper"

type UserData = {
  fullName: string
  userAddress: string
  userEmail: string
}

type IndividualFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export function IndividualForm({
  fullName,
  userAddress,
  userEmail,
  updateFields,
}: IndividualFormProps) {
  return (
    <FormWrapper title="Individual Details">
      <label>Full Name</label>
      <input
        autoFocus
        required
        type="text"
        value={fullName}
        onChange={e => updateFields({ fullName: e.target.value })}
      />
      <label>Personal Address</label>
      <input
        required
        type="text"
        value={userAddress}
        onChange={e => updateFields({ userAddress: e.target.value })}
      />
      <label>Personal Email</label>
      <input
        required
        min={1}
        type="email"
        value={userEmail}
        onChange={e => updateFields({ userEmail: e.target.value })}
      />
    </FormWrapper>
  )
}