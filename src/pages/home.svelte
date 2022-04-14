<Page name="home">
  <div class="bar">
    <Navbar>
    <NavLeft>
      <strong>PORTE LOGICHE&nbsp;&nbsp;</strong>
      <img src="porte.png" alt="">
    </NavLeft>
    </Navbar>
  </div>

<List accordionList> 
<ListItem accordionItem title="7404 - NOT"> 
  <AccordionContent>
    <Block>
      <ListItem accordionItem title="DATASHEET"> 
        <AccordionContent>
          <Block>
            <img class="img" src="not.jpg" alt="not">
          </Block>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="RELAZIONE"> 
        <AccordionContent>
          <Block>
            <Link href="http://loreriz.ddns.net/relazioni/porta_not.html" external>Apri PDF</Link>
          </Block>
        </AccordionContent>
      </ListItem>
    </Block>
  </AccordionContent>
</ListItem> 
<ListItem accordionItem title="7408 - AND"> 
  <AccordionContent>
    <Block>
      <ListItem accordionItem title="DATASHEET"> 
        <AccordionContent>
          <Block>
            <img class="img" src="and.jpg" alt="and">
          </Block>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="RELAZIONE"> 
        <AccordionContent>
          <Block>
            <a href="http://loreriz.ddns.net/relazioni/porta_and.html" download="">Scarica il pdf</a>
          </Block>
        </AccordionContent>
      </ListItem> 
    </Block>
  </AccordionContent>
</ListItem>
<ListItem accordionItem title="7405 - NAND"> 
  <AccordionContent>
    <Block>
      <ListItem accordionItem title="DATASHEET"> 
        <AccordionContent>
          <Block>
            <img class="img" src="nand.jpg" alt="nand">
          </Block>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="RELAZIONE"> 
        <AccordionContent>
          <Block>
            <Link href="http://loreriz.ddns.net/relazioni/porta_nand.html" external>Apri PDF</Link>
          </Block>
        </AccordionContent>
       </ListItem>
    </Block>
</AccordionContent>
</ListItem>
<ListItem accordionItem title="7403 - NAND OC"> 
  <AccordionContent>
    <Block>
      <ListItem accordionItem title="DATASHEET"> 
        <AccordionContent>
          <Block>
            <img class="img" src="nand.jpg" alt="nand_oc">
          </Block>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="RELAZIONE"> 
        <AccordionContent>
          <Block>
            <Link href="http://loreriz.ddns.net/relazioni/porta_nand_oc.html" external>Apri PDF</Link>
          </Block>
        </AccordionContent>
      </ListItem>
    </Block>
  </AccordionContent>
</ListItem>
<ListItem accordionItem title="7432 - OR"> 
  <AccordionContent>
    <Block>
      <ListItem accordionItem title="DATASHEET"> 
        <AccordionContent>
          <Block>
            <img class="img" src="or.jpg" alt="or">
          </Block>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="RELAZIONE"> 
        <AccordionContent>
          <Block>
            <Link href="http://loreriz.ddns.net/relazioni/porta_or.html" external>Apri PDF</Link>
          </Block>
        </AccordionContent>
      </ListItem>
    </Block>
  </AccordionContent>
</ListItem> 
<ListItem accordionItem title="7402 - NOR"> 
  <AccordionContent>
    <Block>
      <ListItem accordionItem title="DATASHEET"> 
        <AccordionContent>
          <Block>
            <img class="img" src="nor.jpg" alt="nor">
          </Block>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="RELAZIONE"> 
        <AccordionContent>
          <Block>
            <Link href="http://loreriz.ddns.net/relazioni/porta_nor.html" external>Apri PDF</Link>
          </Block>
        </AccordionContent>
      </ListItem>
    </Block>
  </AccordionContent>
</ListItem>
<ListItem accordionItem title="7486 - XOR"> 
  <AccordionContent>
    <Block>
      <ListItem accordionItem title="DATASHEET"> 
        <AccordionContent>
          <Block>
            <img class="img" src="xor.jpg" alt="xor">
          </Block>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="RELAZIONE"> 
        <AccordionContent>
          <Block>
            <Link href="http://loreriz.ddns.net/relazioni/porta_xor.html" external>Apri PDF</Link>
          </Block>
        </AccordionContent>
      </ListItem>
    </Block>
  </AccordionContent>
</ListItem>  
</List>
</Page>
<script>
  import {
    Page,
    Accordion,
    AccordionContent,

    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Row,
    Col,
    Button
  } from 'framework7-svelte';
</script>
<style>
  .bar{
    background-color: blue;
  }
  img{
    width: 40px;
    height: 30px;
  }
  .img{
    width: 350px;
    height: 200px;
  }
</style>
