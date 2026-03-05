import StatsCard from '../components/StatsCard'
import FormComponent from '../components/FormComponent'

export default function InnovationsPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Innovation Lab</h1>
        <p className="text-slate-400">Track and develop innovative festival ideas</p>
      </div>

      <div key="0" className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Innovation Lab</h1>
          <p className="text-slate-400">Discover and develop breakthrough festival concepts</p>
        </div>
        
      </div>

      <StatsCard key="1" data={[{"label":"Innovation Ideas","value":"32","icon":"rocket","color":"purple"},{"label":"High Impact","value":"12","icon":"trophy","color":"red"}]} />

      <div key="2" className="card">
        <p className="text-slate-400">Component: cta</p>
      </div>

      <div key="3" className="card">
        <h3 className="text-lg font-semibold mb-4">Innovation Ideas</h3>
        <div className="space-y-3">
          
        </div>
      </div>

      <FormComponent key="4" title="Innovation Details" fields={[{"name":"title","label":"Innovation Title","type":"text","required":true},{"name":"category","label":"Innovation Category","type":"select","required":true,"options":["Technology","Venue Design","Performance Format","Audience Engagement","Sustainability","Accessibility","Marketing","Revenue Model"]},{"name":"description","label":"Description","type":"textarea","required":true},{"name":"applicableConcepts","label":"Applicable Festival Formats","type":"select","required":false,"options":["Single Day","Multi-Day","Competition","Showcase","Workshop Series","Immersive Experience","Virtual/Hybrid","All Formats"]},{"name":"implementationCost","label":"Implementation Cost","type":"currency","required":false},{"name":"impactLevel","label":"Expected Impact (1-10)","type":"number","required":true},{"name":"complexity","label":"Implementation Complexity","type":"select","required":true,"options":["Low","Medium","High","Very High"]},{"name":"status","label":"Status","type":"select","required":true,"options":["Idea","Researching","Testing","Implemented","Proven","Abandoned"]}]} />
    </div>
  )
}
