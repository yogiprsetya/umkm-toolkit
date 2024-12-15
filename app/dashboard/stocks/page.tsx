import { Text } from '~/components/ui/text';
import { StockDataTable } from './_data-table';
import { Button } from '~/components/ui/button';
import { Plus, Package2 } from 'lucide-react';

const StocksPage = () => {
  return (
    <>
      <div className="flex mb-8 items-end justify-between">
        <header>
          <Text tag="h1" variant="heading-2" className="heade">
            Warehouse
          </Text>

          <Text className="text-secondary-foreground">Product stock log and monitoring.</Text>
        </header>

        <nav className="flex gap-2">
          <Button variant="secondary">
            <Plus /> Product
          </Button>

          <Button>
            <Package2 /> Stock-in
          </Button>
        </nav>
      </div>

      <StockDataTable />
    </>
  );
};

export default StocksPage;
