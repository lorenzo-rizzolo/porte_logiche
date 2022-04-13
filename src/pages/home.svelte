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
                                <a href="relazione_and.pdf" download="">Scarica il pdf</a>
                            </Block>
                        </AccordionContent>
                    </ListItem> 
                    </Block>
                </AccordionContent>
            </ListItem> 
        <ListItem accordionItem title="7404 - NOT"> 
            <AccordionContent>
                <Block>
                    <ListItem accordionItem title="DATASHEET"> 
                        <AccordionContent>
                            <Block>
                                
                            </Block>
                       </AccordionContent>
                       </ListItem>
                       <ListItem accordionItem title="RELAZIONE"> 
                        <AccordionContent>
                            <Block>
                                
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
                                
                            </Block>
                       </AccordionContent>
                       </ListItem>
                       <ListItem accordionItem title="RELAZIONE"> 
                        <AccordionContent>
                            <Block>
                                
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
  a{
    background-color: blue;
    color: white;
    font-size: 150%;
    text-decoration: none;
    padding: 25px;
    border-radius: 10px;
  }
</style>
