export type IPaginationOptions = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc'; // asc || desc or 1 || -1
};

// all values are optional cause all time we don't provide the values
