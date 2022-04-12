export interface UnitMeasurement {
    unitId: number;
    unitName: string;
    unitSymbol: string;
    unitBelongsSI: boolean;
    unitValue: number;
    unitCategory?: string;
}[];
