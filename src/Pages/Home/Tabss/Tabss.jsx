import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Allcars from './AllCars/Allcars';
import AllBike from './AllBike.jsx/AllBike';
import AllTrucks from './AllTrucks/AllTrucks';

const Tabss = () => {
 
 
  return (
    <Tabs className="mb-10">
      <div className="text-6xl font-semibold text-center text-orange-700 mb-10 mt-20">Toy Category</div>
      <TabList className="flex justify-center gap-5">
        <Tab>Cars</Tab>
        <Tab>Bike</Tab>
        <Tab>Truck</Tab>
      </TabList>

      <TabPanel className="bg-zinc-200">
     <Allcars></Allcars>
      </TabPanel>
      <TabPanel className="bg-zinc-200">
    <AllBike></AllBike>
      </TabPanel>
      <TabPanel className="bg-zinc-200">
      <AllTrucks></AllTrucks>
      </TabPanel>
    </Tabs>
  );
};

export default Tabss;