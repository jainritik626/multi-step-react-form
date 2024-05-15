
import { FormWrapper } from "./FormWrapper"

type AccountData = {
  accountNumber: string
  bankName: string
}

type BankFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void
}

export function BankForm({
  accountNumber,
  bankName,
  updateFields,
}: BankFormProps) {
  return (
    <FormWrapper title="Account Details">
      <label>Account Number</label>
      <input
        autoFocus
        required
        type="number"
        value={accountNumber}
        onChange={e => updateFields({ accountNumber: e.target.value })}
      />
      <label>Bank Name</label>
      <input
        required
        type="text"
        value={bankName}
        onChange={e => updateFields({ bankName: e.target.value })}
      />
    </FormWrapper>
  )
}
