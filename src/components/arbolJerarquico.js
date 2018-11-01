import React from 'react';
import Tree from 'react-d3-tree';
import sizeMe from 'react-sizeme'

const myTreeData = [
    {
      name: 'Antonio',
      children: [
        {
          name: 'Gerardo',
          children:[
              {
                  name: 'Javier',
                  attributes:{
                      'Ced': '304810266',
                      'Activo' : 'SI'
                  }
              },
              {
                  name:'Gabriela',
                  children:[
                      {
                          name:'Gaudy'
                      },
                      {
                          name:'Mariangel'
                      }
                  ]
              },
              {
                  name:'Cristina',
                  children:[
                      {
                          name:'Samanta'
                      },
                      {
                          name:'Felipe'
                      }
                  ]
              },
              {
                  name:'Susana'
              }
          ]
        },
        {
          name: 'Lorena',
          children:[{
              name: 'Jonathan'
          }, {
              name: 'Greivin'
          }]
        },
        {
            name: 'Ruben'
        },
        {
            name: 'Maria'
        },
        {
            name: 'Francisco'
        }

      ],
    },
  ];

  const svgSquare = {
    shape: 'rect',
    shapeProps: {
      width: 110,
      height: 30,
      x: -10,
      y: -25,
    }
  }

  const estilo = {
    stroke: 'blue',
    strokeWidth: 3,
  }

  const treeStyle = {
    links: {stroke:'#24367c', strokeWidth: 1},
    nodes: {
      node: {
        circle: {stroke:'#24367c', fill:'#5a6aad'},
        name: {stroke: '#f7f8fc', fill:'#f7f8fc'},
        attributes: {stroke: '#5e5f60', fill:'#5e5f60'},
      },
      leafNode: {
        circle:{stroke:'#24367c', fill:'#5a6aad'},
        name: {stroke: '#f7f8fc',fill:'#f7f8fc'},
        attributes: {stroke: '#5e5f60', fill:'#5e5f60'},
      },
    },
  }

class Arbol extends React.Component
{

    click = (data, evt) => {
        console.log(data);
        console.log(evt);
    }


    render()
    {
        const { width } = this.props.size
        return(
            <div id="treeWrapper" style={{width: '100vw', height: '100vh'}}>
               <Tree nodeSvgShape={svgSquare} 
               data={myTreeData} 
               orientation="vertical" 
               translate={{x:(width/2), y:100}} 
               pathFunc="diagonal" 
               onClick={this.click} 
               collapsible={false}
               styles={treeStyle}
               textLayout={{textAnchor:"start", x:-5,y:-9}}
               />
            </div>
        );
    }
}

export default sizeMe({ monitorHeight: true })(Arbol);