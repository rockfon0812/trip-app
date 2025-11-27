
export enum DayType {
  ARRIVAL = 'ARRIVAL',
  SIGHTSEEING = 'SIGHTSEEING',
  PASS_ACTIVE = 'PASS_ACTIVE',
  DEPARTURE = 'DEPARTURE',
  FREE_TIME = 'FREE_TIME'
}

export enum ActivityCategory {
  SIGHTSEEING = 'SIGHTSEEING',
  FOOD = 'FOOD',
  SHOPPING = 'SHOPPING',
  TRANSPORT = 'TRANSPORT'
}

export interface Activity {
  time: string;
  title: string;
  description: string; // Short summary
  details?: string;    // Detailed introduction
  mapLink?: string;    // URL to map
  category: ActivityCategory;
  isPassIncluded?: boolean;
  originalPrice?: number;
  isSavedSpot?: boolean;
}

export interface DayPlan {
  id: number;
  date: string;
  dayOfWeek: string;
  title: string;
  type: DayType;
  activities: Activity[];
  highlight?: string;
}

export interface SavingsData {
  category: string;
  cost: number;
  fill: string;
}

export interface BookingItem {
  id: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  recommendedTime: string; // e.g. "2 weeks before"
  isEssential: boolean;
}

// New Interfaces
export interface WeatherForecast {
  date: string;
  dayOfWeek: string;
  condition: 'sunny' | 'cloudy' | 'rain' | 'snow';
  tempHigh: number;
  tempLow: number;
}

export interface ExchangeRate {
  rate: number; // KRW to TWD
  lastUpdated: string;
}

export interface BudgetCategory {
  category: string;
  amountKRW: number;
  description: string;
}

export interface BudgetEstimate {
  categories: BudgetCategory[];
  totalKRW: number;
}

export interface TripData {
  itinerary: DayPlan[];
  savingsData: SavingsData[];
  bookingItems: BookingItem[];
  weatherForecast: WeatherForecast[];
  exchangeRate: ExchangeRate;
  budgetEstimate: BudgetEstimate;
  tripDates: string;
  passCost: number;
  totalValue: number;
}
