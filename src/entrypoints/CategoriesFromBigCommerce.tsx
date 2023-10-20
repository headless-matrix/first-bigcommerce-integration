import { RenderItemFormOutletCtx, RenderItemFormSidebarPanelCtx } from "datocms-plugin-sdk";
import {
  Button,
  Canvas,
  CaretDownIcon,
  CaretUpIcon,
  Dropdown,
  DropdownMenu,
  DropdownOption,
  DropdownSeparator,
} from "datocms-react-ui";
import { useEffect, useState } from "react";
import { getTree } from "../integration/bigcommerce/getTree";
type PropTypes = {
  ctx: RenderItemFormSidebarPanelCtx;
};
export default function CategoriesFromBigCommerce({ ctx }: PropTypes) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([]);

    getTree().then((data) => {
      setData(data.site.categoryTree);
      console.log("mic", data.site.categoryTree);
    });
  }, []);

  return (
    <Canvas noAutoResizer ctx={ctx}>
      <Dropdown
        renderTrigger={({ open, onClick }) => (
          <Button
            onClick={onClick}
            rightIcon={open ? <CaretUpIcon /> : <CaretDownIcon />}
          >
            Seleziona categoria
          </Button>
        )}
      >
        <DropdownMenu>
          {data.map((item: any) => (
            <DropdownOption
              onClick={() => {
                console.log("ctx", ctx);

                ctx.setFieldValue("url_bigcommerce", true);
                ctx.setFieldValue("titolo", `${item.name}`);
                ctx.setFieldValue("url", `${item.path}`);
                ctx.setFieldValue("entity_id", `${item.entityId}`);
                const message = "Categoria assegnata correttamente";
                ctx.notice(message);                               
              }}
            >
              {item.name}
            </DropdownOption>
          ))}
        </DropdownMenu>
      </Dropdown>
    </Canvas>
  );
}
