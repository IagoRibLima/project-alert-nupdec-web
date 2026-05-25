import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

export default {

 darkMode:['class'],

 content:[
  './index.html',
  './src/**/*.{ts,tsx}'
 ],

 theme:{
  extend:{

   colors:{
    nupdec:{
      orange:'#E85D04',
      navy:'#0D1B2A',
      gray:'#E8EDF2'
    }
   }

  }
 },

 plugins:[animate]

} satisfies Config