export const backgroundSourceOptions = [
  { label: 'Window Average', value: 0 },
  { label: 'Raw Image', value: 1 },
  { label: 'Regional Average', value: 2 },
];
export const gradientSourceOptions = [
  { label: 'Raw Image', value: 0 },
  { label: 'Smoothed Edge', value: 1 },
  { label: 'Regional Average', value: 2 },
];

export const gradientTypeOptions = [
  { label: 'Vertical Edges', value: 0 },
  { label: 'Horizontal Edges', value: 1 },
  { label: 'All Edges (H+V)', value: 2 },
  { label: 'Fast Sobel Gradient', value: 3 },
  { label: 'True Sobel Gradient', value: 4 },
];
export const rejectWhenOptions = [
  { label: 'Above', value: 0 },
  { label: 'Below', value: 1 },
];
export const rejectTypeOptions = [
  { label: 'VR1', value: 0 },
  { label: 'VR4', value: 1 },
  { label: 'Filtered', value: 2 },
];
export const inspectionOptions = [
  { label: 'Gradient', value: 0 },
  { label: 'Light Meter', value: 1 },
  { label: 'Off', value: 2 },
];
