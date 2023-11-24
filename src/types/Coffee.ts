type Coffee = {
  id: string;
  name: string;
  description: string;
  roasted: string;
  imagelink_square: any; // You can replace 'any' with the correct type for the image link
  imagelink_portrait: any; // You can replace 'any' with the correct type for the image link
  ingredients: string;
  special_ingredient: string;
  prices: {
    size: string;
    price: string;
    currency: string;
  }[];
  average_rating: number;
  ratings_count: string;
  favourite: boolean;
  type: string;
  index: number;
};

export default Coffee;
