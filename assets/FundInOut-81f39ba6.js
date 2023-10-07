import{s as p,d as x,r as a,B as h,D as g,j as e,P as F,T as N}from"./index-f6a63d74.js";const R=p.section`
  padding: 0 15px;
`,S=p.div`
  max-width: 1124px;
  width: 100%;
  padding: 24px 30px 106px 30px;
  margin: 0 auto;
  position: relative;
  margin-top: 60px;
  margin-bottom: 60px;
  background-color: #151515;
  border-radius: 8px;
`,U=p.div`
  p {
    margin-top: 24px;
    margin-bottom: 17px;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
  }
  table {
    border-spacing: 0;
    width: 100%;
    border: 1px solid var(--color-white);
    border-radius: 8px;
    thead {
      border-radius: 8px;
      th {
        border-bottom: 1px solid var(--color-white);
      }
      tr {
        th {
          :first-child {
            border-top-left-radius: 8px;
          }
          :last-child {
            border-top-right-radius: 8px;
          }
        }
      }
    }
    tbody {
      td {
        border-bottom: 1px solid var(--color-white);
        background-color: var(--color-dark-gray);
      }
      tr:last-child {
        td {
          :first-child {
            border-bottom-left-radius: 8px;
          }
          :last-child {
            border-bottom-right-radius: 8px;
          }
        }
      }
    }
    tr {
      background-color: var(--color-gray);
      border-radius: 8px;

      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 16px 64px 16px 24px;
      border-right: 1px solid #fff;
      text-wrap: nowrap;

      :last-child {
        border-right: 0;
      }
      @media ${x.tabletL} {
        /* padding: 10px 10px 10px 10px; */
      }
    }
  }
  div:has(input) {
    margin-top: 16px;
  }
  input {
    width: 100%;
    max-width: 240px;
    height: 40px;
    color: var(--color-white);
    background-color: var(--color-dark-gray);
    border: 1px solid var(--color-white);
    border-radius: 8px;
    padding: 8px 9px 8px 16px;
    ::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }
  }
  @media ${x.tabletL} {
    th,
    td {
      font-size: 12px;
    }
  }
`,W=p.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
`,$=()=>{const u=a.useMemo(()=>[{Header:"User Id",accessor:"id"},{Header:"Deposit/Withdraw",accessor:"deposit_withdraw"},{Header:"Old balance",accessor:"name.last"},{Header:"New balance",accessor:"email"},{Header:"Date",accessor:"date"},{Header:"Remarks",accessor:"remarks"}],[]),[o,b]=a.useState([]),[s,m]=a.useState(""),[i,j]=a.useState("");a.useEffect(()=>{(s||i)&&w({date:s,date2:i})},[s,i]);const w=a.useCallback(({date:t="",date2:d=""})=>{const r=({d1:n,d2:C,d3:l})=>{let O=n?new Date(n).getTime():-864e13,c=new Date(C).getTime(),E=l?new Date(l).getTime():864e13;if(O<=c&&E>=c)return!0},I=o.filter(n=>r({d1:t,d2:h(n.dob.date),d3:d}));b(I)},[s,i,o]),{getTableProps:f,getTableBodyProps:v,headerGroups:D,prepareRow:P,page:y,pageOptions:k,gotoPage:T,state:{pageIndex:H}}=g.useTable({columns:u,data:o,initialState:{pageIndex:0}},g.usePagination);return e.jsxs(U,{children:[e.jsxs(W,{children:[e.jsx("input",{type:"date",name:"",id:"",onChange:t=>m(t.target.value)}),e.jsx("input",{type:"date",name:"",id:"",onChange:t=>j(t.target.value)})]}),e.jsx("p",{children:"User: john.wick"}),e.jsxs("div",{style:{overflowX:"auto"},children:[e.jsxs("table",{...f(),children:[e.jsx("thead",{children:D.map(t=>e.jsx("tr",{...t.getHeaderGroupProps(),children:t.headers.map(d=>e.jsx("th",{...d.getHeaderProps(),children:d.render("Header")}))}))}),o.length?e.jsx(e.Fragment,{children:e.jsx("tbody",{...v(),children:y.map((t,d)=>(P(t),e.jsx("tr",{...t.getRowProps(),children:t.cells.map(r=>r.column.Header==="Date"?e.jsx("td",{...r.getCellProps(),children:h(r.value)}):e.jsx("td",{...r.getCellProps(),children:r.render("Cell")}))})))})}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colspan:"6",style:{textAlign:"center"},children:"No data found"})})})]}),e.jsx(F,{currentPage:H+1,totalPages:k.length,onPageChange:T})]})]})},B=()=>e.jsx(R,{children:e.jsxs(S,{children:[e.jsx(N,{title:"FUND IN / OUT"}),e.jsx($,{})]})});export{B as default};
