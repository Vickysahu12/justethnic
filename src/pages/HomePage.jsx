import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { HeroChapters } from '../sections/home/HeroChapters'
import { Perks } from '../sections/home/Perks'
import { CategoryRow } from '../sections/home/CategoryRow'
import { OccasionMosaic } from '../sections/home/OccasionMosaic'
import { NewEdit } from '../sections/home/NewEdit'
import { ChhapaiStudio } from '../sections/home/ChhapaiStudio'
import { BanarasiLoupe } from '../sections/home/BanarasiLoupe'
import { FestiveEdit } from '../sections/home/FestiveEdit'
import { Testimonials } from '../sections/home/Testimonials'
import { Services } from '../sections/home/Services'

export function HomePage() {
  useDocumentTitle()
  return (
    <>
      <HeroChapters />
      <Perks />
      <CategoryRow />
      <OccasionMosaic />
      <NewEdit />
      <ChhapaiStudio />
      <BanarasiLoupe />
      <FestiveEdit />
      <Testimonials />
      <Services />
    </>
  )
}
