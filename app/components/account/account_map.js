
/* ASSET */
export const ASSET = 10000;
export const CURRENT_ASSET = 11000;
export const CASH = 11100;
export const ACCOUNT_RECEIVABLE = 11200;
export const INVENTORY = 11300;


/* LIABILITY */
export const ACCOUNT_PAYABLE = 21100;



/* EQUITY */
export const SHAREHOLDERS_EQUITY = 31100;


/* REVENUE */
export const SALES = 41100;
export const SALES_DISCOUNT = 41200;


/* COST */
export const COGS = 51100;








export const ACCT_CATEGORIES = [
  { category: '', subcategory: ['']},
  { category: 'ASSET', subcategory: ['', 'CURRENT_ASSET', 'NON_CURRENT_ASSET']},
  { category: 'LIABILITY', subcategory: ['', 'CURRENT_LIABILITY', 'NON_CURRENT_LIABILITY']},
  { category: 'EQUITY', subcategory: ['', 'EQUITY'] },
  { category: 'REVENUE', subcategory: ['', 'REVENUE'] },
  { category: 'COST', subcategory: ['', 'COST'] }
]
