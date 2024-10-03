import { isIOS } from "../utils/platform";

export const fontFamilies = {
  MONTSERRAT: {
    normal: isIOS() ? 'Montserrat-Regular' : 'MontserratRegular',
    medium: isIOS() ? 'Montserrat-Medium' : 'MontserratMedium',
    bold: isIOS() ? 'Montserrat-Bold' : 'MontserratBold',
  },
  
  // Adjust the above code to fit your chosen fonts' names
};