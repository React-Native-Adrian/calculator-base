import { globalStyles } from '@/styles/global-styles';
import { Text, type TextProps } from 'react-native';

interface ThemeTextProps extends TextProps {
  variant?: 'primary' | 'secondary';
}

const ThemeText = ({
  children,
  variant = 'primary',
  ...rest
}: ThemeTextProps) => {
  return (
    <Text
      style={[
        {
          color: 'red',
          fontFamily: 'SpaceMono',
        },

        variant === 'primary' && globalStyles.mainResult,
        variant === 'secondary' && globalStyles.subResult,
      ]}
      {...rest}
      numberOfLines={rest.numberOfLines === undefined ? 1 : rest.numberOfLines}
    >
      {children}
    </Text>
  );
};

export default ThemeText;
