import { Car, VehicleDataPath } from '@/app/types/cars';
import VehicleData from './VehicleData';

export async function generateStaticParams() {
  const makesResponse = await fetch(
    'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'
  );
  const makesData = await makesResponse.json();

  const years = Array.from({ length: 10 }, (_, i) => 2015 + i);
  const paths: VehicleDataPath[] = [];

  makesData.Results.forEach((car: Car) => {
    years.forEach((year) => {
      paths.push({
        makeId: car.MakeId.toString(),
        year: year.toString(),
      });
    });
  });

  return paths;
}

export default async function ResultPage({
  params,
}: {
  params: VehicleDataPath;
}) {
  const { makeId, year } = params;

  return <VehicleData makeId={makeId} year={year} />;
}
