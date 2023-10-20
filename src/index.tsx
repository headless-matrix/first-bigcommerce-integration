import { connect, ItemFormSidebarPanelPlacement, RenderItemFormOutletCtx  } from 'datocms-plugin-sdk';
import { render } from './utils/render';
import ConfigScreen from './entrypoints/ConfigScreen';
import 'datocms-react-ui/styles.css';
import ReactDOM from 'react-dom';
import React from 'react';
import CategoriesFromBigCommerce from './entrypoints/CategoriesFromBigCommerce';

connect({
  renderConfigScreen(ctx) {
    return render(<ConfigScreen ctx={ctx} />);
  },
  /*itemFormOutlets() {
    return [
      {
        id: 'myOutlet'
      },
    ];
  },*/
  /*renderItemFormOutlet(
    outletId,
    ctx,
  ) {
    ReactDOM.render(
      <React.StrictMode>
        <CategoriesFromBigCommerce  ctx={ctx} />
      </React.StrictMode>,
      document.getElementById('root'),
    );
  },*/  
  itemFormSidebarPanels() {
    return [
      {
        id: 'cat-manage-bigcommerce',
        label: 'Categorie di BigCommerce',
        startOpen: true,
        initialHeight: 500
      },
    ];
  },
  renderItemFormSidebarPanel(sidebarPaneId, ctx) {
    render(<CategoriesFromBigCommerce ctx={ctx} />);
  },
  
  
});
