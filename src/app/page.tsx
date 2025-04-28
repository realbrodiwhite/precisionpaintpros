'use client';
 
 import { Button } from '@/components/ui/button';
 import { ServicesSection } from '@/components/home/services-section';
 import Image from 'next/image';
-import React, { useEffect, useRef } from 'react';
 import { useEffect, useRef } from 'react';
 import { cn } from '@/lib/utils';
 
 export default function Home() {
+
   const heroRef = useRef<HTMLDivElement>(null);
   const servicesRef = useRef<HTMLElement>(null);
   const contactRef = useRef<HTMLElement>(null);
@@ -54,7 +54,7 @@
         {/* Background Image */}
         <Image
           src="/assets/Graco_x17.png"
-          alt="Graco Paint Sprayer"
+          alt="Precision Paint Pros Paint Sprayer"
           layout="fill"
           objectFit="cover"
           quality={80}
@@ -178,5 +178,4 @@
     </div>
   );
 }
-
+ 
