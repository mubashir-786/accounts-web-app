import 'devextreme/dist/css/dx.material.blue.light.css';
import { memo } from 'react';
import { Card } from 'components';
import DataGrid, {
  Column,
  Grouping,
  GroupPanel,
  Selection,
  Pager,
  Paging,
  SearchPanel,
  IColumnProps,
} from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.material.blue.light.css';
// type TData = {
//   company_name: string,
//   website: string,
//   email: string,
//   number: string,
//   contact_person: string,
//   address: string,
//   country: string
// }
type Props<TData> = {
  columns: IColumnProps[];
  url?: string;
  content: TData[];
  selection?: boolean;
  onSelection?: (list: TData[]) => void;
  customURL?: (item: string) => string;
};

const ListComponent = <TData extends { id?: string }>({
  url,
  columns,
  content,
  selection,
  onSelection,
  customURL,
}: Props<TData>) => {
  return (
    <Card>
      <DataGrid
        showBorders={true}
        dataSource={content}
        hoverStateEnabled={true}
        allowColumnReordering={true}
        rowAlternationEnabled={true}
        // onExporting={onExporting}
        onSelectionChanged={({ selectedRowsData }) => {
          if (onSelection) onSelection(selectedRowsData);
        }}
      >
        <GroupPanel visible={true} />
        <SearchPanel visible={true} highlightCaseSensitive={true} />
        <Grouping autoExpandAll={false} />
        {selection && <Selection mode={'multiple'} allowSelectAll />}
        {columns.map((item, index) => (
          <Column {...item} key={index} />
        ))}
        {/* {url || customURL ? viewColumn : null} */}
        <Pager
          allowedPageSizes={[10, 25, 50, 100]}
          showPageSizeSelector={true}
        />
        <Paging defaultPageSize={10} />
        {/* <Export enabled={true} formats={['pdf', 'xlsx']} /> */}
      </DataGrid>
    </Card>
  );
};

export const List = memo(ListComponent);
