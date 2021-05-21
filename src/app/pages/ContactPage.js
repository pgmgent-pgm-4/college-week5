import { useState } from 'react';

import { ThemedButton, ThemeToggle, ThemedPanel } from '../components/theme';
import { ThemeContext, ThemeProvider } from '../contexts';
import { BaseLayout } from '../layouts';

const ContactPage = () => {
  return (
    <BaseLayout>
      <ThemeProvider>
        <ThemedButton />
        <ThemeToggle />
        <ThemedPanel>
          <p>Lorem ipsum dolizzle sit i saw beyonces tizzles and my pizzle went crizzle, crackalackin adipiscing pimpin'. Nullam sapien velizzle, fo volutpizzle, suscipizzle quis, dizzle vel, dawg. Pellentesque boom shackalack boofron. Sizzle erizzle. Fo shizzle my nizzle izzle dolizzle uhuh ... yih! turpis check it out sheezy. Maurizzle pellentesque check it out et crackalackin. Bow wow wow in tortor. Pellentesque the bizzle rhoncizzle . In hizzle habitasse platea dictumst. Fizzle dapibizzle. Get down get down stuff urna, the bizzle, mattizzle ac, eleifend vitae, pot. Shut the shizzle up suscipizzle. Integer semper velizzle brizzle doggy.</p>
        </ThemedPanel>
      </ThemeProvider>
    </BaseLayout>
  );
};

export default ContactPage;