<Page name="home">
  <div class="bar">
    <Navbar>
      <NavTitle>PORTE LOGICHE</NavTitle>
    </Navbar>
  </div>

    <List accordionList>
            <ListItem accordionItem title="7408 - AND"> 
                <AccordionContent>
                    <Block>
                        
                    </Block>
                </AccordionContent>
            </ListItem> 
        <ListItem accordionItem title="7404 - NOT"> 
            <AccordionContent>
                <Block>
                    
                </Block>
            </AccordionContent>
        </ListItem> 
        <ListItem accordionItem title="7405 - NAND"> 
          <AccordionContent>
              <Block>
                  
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
</style>