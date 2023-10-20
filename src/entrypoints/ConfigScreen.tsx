import { RenderConfigScreenCtx } from "datocms-plugin-sdk";
import { Canvas, ContextInspector } from "datocms-react-ui";
import s from "./styles.module.css";
import { query } from "./query";
import { graphQlFetch } from "../integration/bigcommerce/lib/fetch";
import { useEffect, useState } from "react";
import { getTree } from "../integration/bigcommerce/getTree";

type Props = {
  ctx: RenderConfigScreenCtx;
};

export default function ConfigScreen({ ctx }: Props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([]);

    getTree().then((data) => {
      setData(data.site.categoryTree);
      console.log("mic", data.site.categoryTree);
    });
  }, []);

  //const data : any = getTree();

  return (
    <Canvas ctx={ctx}>
      <p>Ciao Sono un Hook del Plugin</p>
      {data.map((item: any) => (
        <>
          <p style={{fontWeight: "bold"}}>{item.name}</p>
          {item.children && 
          
            item.children.map( (child : any) => ( 
            <p style={{marginLeft: "10px"}}>{child.name}</p> 
            ))                    
          }
        </>
      ))}

      <div className={s.inspector}>
        <ContextInspector />
      </div>
    </Canvas>
  );
}
