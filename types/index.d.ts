declare type User = {
    name: string | null,
    email: string,
    phone_number?: string,
    username?: string,
    clerkId: string,
    balance?: number | null,  // number or null
    bankAccountNumber?: string,
    bankName?: string,
    first_name?: string,
    last_name?: string,
    imageUrl?: string
  }
  


  declare type AccountProps = {
    accountNumber: string;
    accountName: string;
    bankNamw: string;
    
  }