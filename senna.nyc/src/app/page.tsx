// src/app/page.tsx
'use client';

import { Button, Container, Grid, Card, Text, Spacer, Link } from '@nextui-org/react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <Container sm>
      <Grid.Container gap={2} justify="center" alignItems="center" direction="column" css={{ minHeight: '100vh' }}>
        
        {/* Logo Section */}
        <Grid xs={12} css={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
          </motion.div>
        </Grid>
        
        {/* Main Content */}
        <Grid xs={12} sm={8}>
          <Card shadow css={{ padding: '2rem', textAlign: 'center' }}>
            <motion.ol
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ listStyleType: 'decimal', paddingLeft: '20px', textAlign: 'left' }}
            >
              <li className="mb-2">
                Get started by editing{' '}
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                  src/app/page.tsx
                </code>
                .
              </li>
              <li>Save and see your changes instantly.</li>
            </motion.ol>
          </Card>
        </Grid>

        {/* Action Buttons */}
        <Grid xs={12} sm={8}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}
          >
            <Button 
              color="primary" 
              auto 
              as="a" 
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" 
              target="_blank"
              css={{ 
                width: '100%', 
                maxWidth: '300px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
                className="dark:invert"
              />
              <Spacer x={0.5} />
              Deploy Now
            </Button>
            <Button 
              color="secondary" 
              auto 
              as="a" 
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" 
              target="_blank"
              css={{ 
                width: '100%', 
                maxWidth: '300px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Read Our Docs
            </Button>
          </motion.div>
        </Grid>

        {/* Footer Links */}
        <Grid xs={12} css={{ textAlign: 'center', marginTop: '2rem' }}>
          <Grid.Container gap={2} justify="center">
            <Grid>
              <Link href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Text b color="secondary">
                    Learn
                  </Text>
                </motion.div>
              </Link>
            </Grid>
            <Grid>
              <Link href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Text b color="secondary">
                    Examples
                  </Text>
                </motion.div>
              </Link>
            </Grid>
            <Grid>
              <Link href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Text b color="secondary">
                    Go to nextjs.org →
                  </Text>
                </motion.div>
              </Link>
            </Grid>
          </Grid.Container>
        </Grid>

      </Grid.Container>
    </Container>
  );
}
