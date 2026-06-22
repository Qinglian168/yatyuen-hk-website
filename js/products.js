/* ============================================
   YAT YUEN (HK) - Product Data
   7 Brands × 10 Products = 70 Products
   ============================================ */

var productsData = [
    // ==================== HP / HPE (10 products) ====================
    {
        id: 'hp-01',
        image: 'assets/products/hp-01.png', brand: 'HP', brandClass: 'brand-hp',
        category: 'server', icon: '🖥️',
        model: 'P04982-B21',
        name: { 'zh-TW': 'HPE ProLiant DL380 Gen10 Plus 伺服器', 'en': 'HPE ProLiant DL380 Gen10 Plus Server' },
        desc: {
            'zh-TW': '2U機架式伺服器，搭載Intel Xeon處理器，適用於虛擬化、數據庫和高效能運算工作負載，支援最高6TB記憶體。',
            'en': '2U rack server powered by Intel Xeon Scalable processors, ideal for virtualization, databases and HPC workloads, supporting up to 6TB memory.'
        },
        specs: ['2U Rack', 'Intel Xeon Scalable', '24x DIMM', '24x SFF Bays', 'iLO 5']
    },
    {
        id: 'hp-02',
        image: 'assets/products/hp-02.png', brand: 'HP', brandClass: 'brand-hp',
        category: 'server', icon: '🖥️',
        model: 'P26434-B21',
        name: { 'zh-TW': 'HPE ProLiant DL360 Gen10 Plus 伺服器', 'en': 'HPE ProLiant DL360 Gen10 Plus Server' },
        desc: {
            'zh-TW': '1U高密度機架伺服器，提供卓越的計算密度和能效，支援PCIe 4.0，適合大規模數據中心部署。',
            'en': '1U high-density rack server delivering excellent compute density and power efficiency with PCIe 4.0 support, ideal for scale-out data centers.'
        },
        specs: ['1U Rack', 'Intel Xeon Scalable', '16x DIMM', '8x SFF Bays', '2x 10GbE']
    },
    {
        id: 'hp-03',
        image: 'assets/products/hp-03.png', brand: 'HP', brandClass: 'brand-hp',
        category: 'server', icon: '🖥️',
        model: 'P44358-B21',
        name: { 'zh-TW': 'HPE ProLiant ML350 Gen10 塔式伺服器', 'en': 'HPE ProLiant ML350 Gen10 Tower Server' },
        desc: {
            'zh-TW': '塔式伺服器，支援最多5個PCIe擴展槽，適合中小型企業的文件共享和應用服務場景。',
            'en': 'Tower server supporting up to 5 PCIe expansion slots, designed for SMB file sharing, print and light application services.'
        },
        specs: ['5U Tower', 'Intel Xeon Scalable', '24x DIMM', '8x LFF / 16x SFF', 'iLO 5']
    },
    {
        id: 'hp-04',
        image: 'assets/products/hp-04.png', brand: 'HP', brandClass: 'brand-hp',
        category: 'storage', icon: '💾',
        model: 'Q1J18A',
        name: { 'zh-TW': 'HPE MSA 2060 存儲陣列', 'en': 'HPE MSA 2060 Storage Array' },
        desc: {
            'zh-TW': '入門級SAN/NAS存儲系統，支援SAS與NVMe SSD混插，為中小型企業提供高性價比存儲方案，傳輸速率高達10GbE。',
            'en': 'Entry-level SAN/NAS storage array supporting mixed SAS and NVMe SSDs, delivering up to 10GbE throughput for SMBs at a competitive price point.'
        },
        specs: ['2U Form Factor', '24x SFF Drives', 'SAS / NVMe', '10GbE / 16Gb FC', 'Snapshots & Replication']
    },
    {
        id: 'hp-05',
        image: 'assets/products/hp-05.png', brand: 'HP', brandClass: 'brand-hp',
        category: 'storage', icon: '💾',
        model: 'AF40',
        name: { 'zh-TW': 'HPE Nimble Storage AF40 全快閃陣列', 'en': 'HPE Nimble Storage AF40 All-Flash Array' },
        desc: {
            'zh-TW': '全快閃存儲陣列，提供極低延遲和高IOPS，配備AI驅動的預測分析功能（InfoSight），有效預防故障。',
            'en': 'All-flash storage array delivering sub-ms latency and high IOPS with AI-driven predictive analytics via InfoSight, proactively preventing disruptions.'
        },
        specs: ['All-Flash', 'Up to 17TB Raw', 'NVMe Ready', 'Triple+ Parity', 'InfoSight AI']
    },
    {
        id: 'hp-06',
        image: 'assets/products/hp-06.png', brand: 'HP', brandClass: 'brand-hp',
        category: 'frame', icon: '🏗️',
        model: '868714-B21',
        name: { 'zh-TW': 'HPE Synergy 12000 融合基礎架構框架', 'en': 'HPE Synergy 12000 Composable Frame' },
        desc: {
            'zh-TW': '組合式基礎架構平台，透過軟體定義資源池實現IT資源的動態組合和自動化部署，適用於私有雲和混合雲環境。',
            'en': 'Composable infrastructure frame enabling dynamic allocation of compute, storage and fabric resources via software-defined templates, ideal for private/hybrid cloud.'
        },
        specs: ['10U Frame', 'Up to 12 Compute Modules', 'Fabric Ring', 'Template Provisioning', 'API-Driven']
    },
    {
        id: 'hp-07',
        image: 'assets/products/hp-07.png', brand: 'HP', brandClass: 'brand-hp',
        category: 'switch', icon: '🔀',
        model: 'JL322A',
        name: { 'zh-TW': 'HPE FlexNetwork 5520 HI 交換機', 'en': 'HPE FlexNetwork 5520 HI Switch' },
        desc: {
            'zh-TW': '企業級L3交換機，搭載48個千兆電口和4個萬兆光口，具備強大的安全認證和ACL管理功能，適合中型園區核心部署。',
            'en': 'Enterprise L3 switch with 48 Gigabit ports and 4x 10GbE SFP+ uplinks, featuring robust 802.1X authentication and ACL controls for mid-size campus cores.'
        },
        specs: ['48x 1GbE', '4x 10GbE SFP+', 'Layer 3', 'IRF Stackable', 'ACL & QoS']
    },
    {
        id: 'hp-08',
        image: 'assets/products/hp-08.png', brand: 'HP', brandClass: 'brand-hp',
        category: 'switch', icon: '🔀',
        model: 'JL813A',
        name: { 'zh-TW': 'HPE OfficeConnect 1820 交換機', 'en': 'HPE OfficeConnect 1820 Switch' },
        desc: {
            'zh-TW': '24端口非管理型千兆交換機，即插即用，無風扇設計，適合小型辦公室網絡靜音部署，支援桌上型和牆壁掛安裝。',
            'en': '24-port unmanaged Gigabit switch with fanless design for silent SOHO deployment, supporting desktop and wall-mount installation out of the box.'
        },
        specs: ['24x 1GbE', 'Unmanaged', 'Fanless Design', 'Energy Efficient', 'Desktop / Wall Mount']
    },
    {
        id: 'hp-09',
        image: 'assets/products/hp-09.png', brand: 'HP', brandClass: 'brand-hp',
        category: 'desktop', icon: '💻',
        model: '4F1E4EA',
        name: { 'zh-TW': 'HP EliteDesk 800 G9 桌面電腦', 'en': 'HP EliteDesk 800 G9 Desktop PC' },
        desc: {
            'zh-TW': '商用桌面電腦，搭載第12代Intel Core處理器，支援多顯示器輸出和Intel vPro企業管理功能，通過ISV認證。',
            'en': 'Business desktop with 12th Gen Intel Core processor, multi-display support, Intel vPro enterprise management, and ISV certification for professional workloads.'
        },
        specs: ['Intel Core i7', '16GB DDR5', '512GB NVMe SSD', 'Wi-Fi 6E', 'vPro Enterprise']
    },
    {
        id: 'hp-10',
        image: 'assets/products/hp-10.png', brand: 'HP', brandClass: 'brand-hp',
        category: 'tape', icon: '📀',
        model: 'BG720A',
        name: { 'zh-TW': 'HPE StoreEver LTO Ultrium 磁帶機', 'en': 'HPE StoreEver LTO Ultrium Tape Drive' },
        desc: {
            'zh-TW': 'LTO-9磁帶驅動器，提供18TB原生容量（45TB壓縮後），適合長期數據歸檔和合規存儲需求，傳輸速率高達450MB/s。',
            'en': 'LTO-9 tape drive with 18TB native capacity (45TB compressed), ideal for long-term data archiving and compliance storage, with transfer speeds up to 450MB/s.'
        },
        specs: ['LTO-9 Format', '18TB Native', '450MB/s', 'LTFS Support', 'SAS Interface']
    },

    // ==================== DELL (10 products) ====================
    {
        id: 'dell-01',
        image: 'assets/products/dell-01.png', brand: 'DELL', brandClass: 'brand-dell',
        category: 'server', icon: '🖥️',
        model: 'R740XD',
        name: { 'zh-TW': 'Dell PowerEdge R740xd 伺服器', 'en': 'Dell PowerEdge R740xd Server' },
        desc: {
            'zh-TW': '2U機架伺服器，支援最多24個NVMe SSD，儲存擴充能力卓越，專為軟體定義存儲和高密度虛擬化環境設計。',
            'en': '2U rack server supporting up to 24 NVMe SSDs with exceptional storage expandability, purpose-built for software-defined storage and high-density virtualization.'
        },
        specs: ['2U Rack', 'Dual Intel Xeon', '24x NVMe Capable', 'iDRAC9', 'Redundant PSU']
    },
    {
        id: 'dell-02',
        image: 'assets/products/dell-02.png', brand: 'DELL', brandClass: 'brand-dell',
        category: 'server', icon: '🖥️',
        model: 'R650',
        name: { 'zh-TW': 'Dell PowerEdge R650 伺服器', 'en': 'Dell PowerEdge R650 Server' },
        desc: {
            'zh-TW': '1U雙路伺服器，搭載第三代Intel Xeon處理器，支援PCIe 4.0和16個DDR4記憶體插槽，專為密集型運算和虛擬化場景設計。',
            'en': '1U dual-socket server with 3rd Gen Intel Xeon processors, PCIe 4.0 support and 16 DDR4 slots, engineered for dense compute and virtualization.'
        },
        specs: ['1U Rack', 'Dual Socket', '16x DIMM', 'PCIe 4.0', 'iDRAC9']
    },
    {
        id: 'dell-03',
        image: 'assets/products/dell-03.png', brand: 'DELL', brandClass: 'brand-dell',
        category: 'server', icon: '🖥️',
        model: 'R750',
        name: { 'zh-TW': 'Dell PowerEdge R750 伺服器', 'en': 'Dell PowerEdge R750 Server' },
        desc: {
            'zh-TW': '2U通用型伺服器，支援PCIe 4.0和32個DDR4記憶體插槽，平衡計算、存儲和I/O性能，適用於AI推論和數據庫加速場景。',
            'en': '2U general-purpose server with PCIe 4.0 and 32 DDR4 slots, balancing compute, storage and I/O, optimized for AI inference and database acceleration.'
        },
        specs: ['2U Rack', 'PCIe 4.0', '32x DIMM', '16x NVMe', 'TPM 2.0']
    },
    {
        id: 'dell-04',
        image: 'assets/products/dell-04.png', brand: 'DELL', brandClass: 'brand-dell',
        category: 'server', icon: '🖥️',
        model: 'R660',
        name: { 'zh-TW': 'Dell PowerEdge R660 伺服器', 'en': 'Dell PowerEdge R660 Server' },
        desc: {
            'zh-TW': '1U高效能伺服器，搭載第四代Intel Xeon處理器，支援DDR5記憶體和PCIe 5.0，提供空氣冷卻和液冷兩種散熱方案。',
            'en': '1U high-performance server with 4th Gen Intel Xeon, DDR5 memory and PCIe 5.0 support, available in air-cooled and direct liquid cooling configurations.'
        },
        specs: ['1U Rack', 'Intel Xeon 4th Gen', 'DDR5', 'PCIe 5.0', 'Air / Liquid Cooling']
    },
    {
        id: 'dell-05',
        image: 'assets/products/dell-05.png', brand: 'DELL', brandClass: 'brand-dell',
        category: 'storage', icon: '💾',
        model: '5F2M5',
        name: { 'zh-TW': 'Dell PowerStore 5000 存儲', 'en': 'Dell PowerStore 5000 Storage' },
        desc: {
            'zh-TW': '下一代存儲陣列，支援NVMe和存儲級記憶體（SCM），內置機器學習優化功能，提供AppsON虛擬化能力，無需額外伺服器即可運行虛擬機。',
            'en': 'Next-gen NVMe-based storage array with built-in machine learning optimization and AppsON capability, allowing VMs to run directly on the array without external servers.'
        },
        specs: ['NVMe All-Flash', 'Up to 1.2PB', '4x 25GbE', 'AppsON', 'Intelligent Automation']
    },
    {
        id: 'dell-06',
        image: 'assets/products/dell-06.png', brand: 'DELL', brandClass: 'brand-dell',
        category: 'storage', icon: '💾',
        model: '5C99M',
        name: { 'zh-TW': 'Dell Unity XT 380 統一存儲', 'en': 'Dell Unity XT 380 Unified Storage' },
        desc: {
            'zh-TW': '統一存儲系統，同時支援SAN（區塊）和NAS（文件）存取，提供雲端分層功能，將冷數據自動遷移至公有雲，降低存儲成本。',
            'en': 'Unified storage array concurrently supporting SAN block and NAS file access, featuring cloud tiering to automatically migrate cold data to public cloud for cost optimization.'
        },
        specs: ['Unified SAN/NAS', 'Hybrid / All-Flash', 'NVMe Ready', 'Cloud Tiering', 'Inline Dedup']
    },
    {
        id: 'dell-07',
        image: 'assets/products/dell-07.png', brand: 'DELL', brandClass: 'brand-dell',
        category: 'storage', icon: '💾',
        model: 'ME5022',
        name: { 'zh-TW': 'Dell PowerVault ME5022 存儲', 'en': 'Dell PowerVault ME5022 Storage' },
        desc: {
            'zh-TW': '模組化企業存儲陣列，支援SAS和NVMe SSD混插，提供自動分層存儲功能，為中小型企業提供高性價比的集中式存儲方案。',
            'en': 'Modular enterprise storage array with mixed SAS/NVMe SSD support and automated tiering, delivering cost-effective centralized storage for SMBs and ROBO deployments.'
        },
        specs: ['2U / 5U Options', 'Hybrid Array', '12Gb SAS', 'Auto-tiering', 'Replication']
    },
    {
        id: 'dell-08',
        image: 'assets/products/dell-08.png', brand: 'DELL', brandClass: 'brand-dell',
        category: 'switch', icon: '🔀',
        model: 'N3248TE',
        name: { 'zh-TW': 'Dell PowerSwitch N3248TE 交換機', 'en': 'Dell PowerSwitch N3248TE Switch' },
        desc: {
            'zh-TW': '48端口千兆管理型交換機，支援L2/L3功能和靜態路由，可透過Dell OpenManage Network Manager統一管理，適合企業邊界網絡部署。',
            'en': '48-port managed Gigabit switch with L2/L3 capabilities and static routing, centrally manageable via Dell OpenManage Network Manager, ideal for enterprise edge networks.'
        },
        specs: ['48x 1GbE', '4x 10GbE SFP+', 'Layer 3 Lite', 'Stackable', 'PoE+ Option']
    },
    {
        id: 'dell-09',
        image: 'assets/products/dell-09.png', brand: 'DELL', brandClass: 'brand-dell',
        category: 'switch', icon: '🔀',
        model: 'S5224F',
        name: { 'zh-TW': 'Dell PowerSwitch S5224F 交換機', 'en': 'Dell PowerSwitch S5224F Switch' },
        desc: {
            'zh-TW': '24端口萬兆SFP+交換機，支援L3動態路由協議（OSPF、BGP），適用於數據中心葉節點（Leaf）和企業核心網絡。',
            'en': '24-port 10GbE SFP+ switch with L3 dynamic routing (OSPF, BGP), designed for data center leaf nodes and enterprise core networks.'
        },
        specs: ['24x 10GbE SFP+', '4x 25GbE', 'Layer 3', 'VxLAN', 'Stacking Support']
    },
    {
        id: 'dell-10',
        image: 'assets/products/dell-10.png', brand: 'DELL', brandClass: 'brand-dell',
        category: 'desktop', icon: '💻',
        model: '7090-SFF',
        name: { 'zh-TW': 'Dell OptiPlex 7090 桌面電腦', 'en': 'Dell OptiPlex 7090 Desktop PC' },
        desc: {
            'zh-TW': '商用小型桌面電腦，搭載第11代Intel Core處理器，支援Intel vPro企業遠程管理，體積小巧適合現代化辦公環境。',
            'en': 'Commercial small form factor desktop with 11th Gen Intel Core processor and Intel vPro remote management, compact design for modern workspace deployment.'
        },
        specs: ['Intel Core i7 11th Gen', '16GB DDR4', '512GB SSD', 'vPro', 'Compact SFF']
    },

    // ==================== HUAWEI (10 products) ====================
    {
        id: 'huawei-01',
        image: 'assets/products/huawei-01.png', brand: 'HUAWEI', brandClass: 'brand-huawei',
        category: 'switch', icon: '🔀',
        model: 'S5731-H48T4XC',
        name: { 'zh-TW': '華為 CloudEngine S5731-H 交換機', 'en': 'Huawei CloudEngine S5731-H Switch' },
        desc: {
            'zh-TW': '48端口千兆電口交換機，配備4個萬兆SFP+光口，支援PoE++（802.3bt）和雲管理平台，適合企業園區網絡接入層部署。',
            'en': '48-port Gigabit access switch with 4x 10GbE SFP+ uplinks, supporting PoE++ (802.3bt) and cloud management, designed for enterprise campus access layers.'
        },
        specs: ['48x 1GbE', '4x 10GbE SFP+', 'PoE++', 'Cloud Managed', 'SVF']
    },
    {
        id: 'huawei-02',
        image: 'assets/products/huawei-02.png', brand: 'HUAWEI', brandClass: 'brand-huawei',
        category: 'switch', icon: '🔀',
        model: 'S6730-H48X6C',
        name: { 'zh-TW': '華為 CloudEngine S6730-H 交換機', 'en': 'Huawei CloudEngine S6730-H Switch' },
        desc: {
            'zh-TW': '48端口萬兆SFP+交換機，支援6個100G QSFP28上行接口，具備VXLAN和EVPN能力，適用於大型數據中心和高性能園區核心。',
            'en': '48-port 10GbE SFP+ switch with 6x 100G QSFP28 uplinks, featuring VXLAN/EVPN support for large-scale data centers and high-performance campus cores.'
        },
        specs: ['48x 10GbE SFP+', '6x 100G QSFP28', 'Layer 3', 'Stackable', 'VxLAN']
    },
    {
        id: 'huawei-03',
        image: 'assets/products/huawei-03.png', brand: 'HUAWEI', brandClass: 'brand-huawei',
        category: 'router', icon: '🌐',
        model: 'AR6300',
        name: { 'zh-TW': '華為 AR6300 企業路由器', 'en': 'Huawei AR6300 Enterprise Router' },
        desc: {
            'zh-TW': '企業級邊界路由器，支援SD-WAN智能選路和5G上行接口，提供多千兆轉發能力，適合大中型企業總部互聯。',
            'en': 'Enterprise edge router with SD-WAN intelligent path selection and 5G uplink support, delivering multi-gigabit forwarding for large enterprise headquarters interconnect.'
        },
        specs: ['Multi-Gigabit', 'SD-WAN', '5G Uplink', '16x GE', 'Modular Design']
    },
    {
        id: 'huawei-04',
        image: 'assets/products/huawei-04.png', brand: 'HUAWEI', brandClass: 'brand-huawei',
        category: 'router', icon: '🌐',
        model: 'NetEngine AR8000',
        name: { 'zh-TW': '華為 NetEngine AR8000 路由器', 'en': 'Huawei NetEngine AR8000 Router' },
        desc: {
            'zh-TW': '高性能企業核心路由器，支援T級轉發吞吐量，提供400G接口選項和SRv6（Segment Routing over IPv6）協議，適用於大型企業和服務提供商。',
            'en': 'High-performance enterprise core router with terabit forwarding capacity, 400G interface options and SRv6 support for large enterprises and service providers.'
        },
        specs: ['Terabit Forwarding', '400G Interfaces', 'SRv6', 'NetConf', 'Redundant Architecture']
    },
    {
        id: 'huawei-05',
        image: 'assets/products/huawei-05.png', brand: 'HUAWEI', brandClass: 'brand-huawei',
        category: 'ap', icon: '📶',
        model: 'AirEngine 6760',
        name: { 'zh-TW': '華為 AirEngine 6760 無線AP', 'en': 'Huawei AirEngine 6760 Access Point' },
        desc: {
            'zh-TW': 'Wi-Fi 6（802.11ax）無線接入點，支援OFDMA和MU-MIMO技術，提供高密度場景下穩定的無線連接，內置IoT擴充槽。',
            'en': 'Wi-Fi 6 (802.11ax) access point with OFDMA and MU-MIMO, delivering stable wireless connectivity in high-density environments with built-in IoT expansion slot.'
        },
        specs: ['Wi-Fi 6 (802.11ax)', 'Dual-band', '4x4 MIMO', '2.5GbE Uplink', 'IoT Expansion']
    },
    {
        id: 'huawei-06',
        image: 'assets/products/huawei-06.png', brand: 'HUAWEI', brandClass: 'brand-huawei',
        category: 'ap', icon: '📶',
        model: 'AirEngine 5760',
        name: { 'zh-TW': '華為 AirEngine 5760 無線AP', 'en': 'Huawei AirEngine 5760 Access Point' },
        desc: {
            'zh-TW': 'Wi-Fi 6壁掛式AP，內置天線設計，支援PoE+供電，適合辦公室、酒店和學校等室內牆壁部署場景。',
            'en': 'Wi-Fi 6 wall-plate AP with built-in antennas and PoE+ power, designed for in-room wireless coverage in offices, hotels and schools.'
        },
        specs: ['Wi-Fi 6', 'Wall-plate Design', '2x2 MIMO', 'PoE+', 'BLE Enabled']
    },
    {
        id: 'huawei-07',
        image: 'assets/products/huawei-07.png', brand: 'HUAWEI', brandClass: 'brand-huawei',
        category: 'storage', icon: '💾',
        model: 'OceanStor 5310',
        name: { 'zh-TW': '華為 OceanStor 5310 存儲系統', 'en': 'Huawei OceanStor 5310 Storage System' },
        desc: {
            'zh-TW': '企業級統一存儲系統，同時支援SAN和NAS協議，提供智能數據重複刪除和壓縮功能，有效降低存儲容量需求。',
            'en': 'Enterprise unified storage system concurrently supporting SAN and NAS protocols, featuring intelligent data deduplication and compression to reduce storage capacity requirements.'
        },
        specs: ['Unified Storage', 'SAN / NAS', 'Smart Dedup', 'Up to 4PB', 'HyperReplication']
    },
    {
        id: 'huawei-08',
        image: 'assets/products/huawei-08.png', brand: 'HUAWEI', brandClass: 'brand-huawei',
        category: 'server', icon: '🖥️',
        model: 'RH2288H',
        name: { 'zh-TW': '華為 RH2288H V5 伺服器', 'en': 'Huawei RH2288H V5 Server' },
        desc: {
            'zh-TW': '2U通用型機架伺服器，搭載Intel Xeon處理器，支援24個DDR4記憶體插槽和12個LFF存儲槽，適用於企業核心應用和數據庫服務。',
            'en': '2U general-purpose rack server with Intel Xeon processors, 24 DDR4 DIMM slots and 12 LFF drive bays, designed for enterprise core applications and database services.'
        },
        specs: ['2U Rack', 'Dual Intel Xeon', '24x DIMM', '12x LFF Bays', 'iBMC Management']
    },
    {
        id: 'huawei-09',
        image: 'assets/products/huawei-09.png', brand: 'HUAWEI', brandClass: 'brand-huawei',
        category: 'firewall', icon: '🛡️',
        model: 'USG6507E',
        name: { 'zh-TW': '華為 USG6000E 防火牆', 'en': 'Huawei USG6000E Firewall' },
        desc: {
            'zh-TW': '下一代防火牆，整合入侵防禦（IPS）、反病毒和應用識別功能，提供IPSec/SSL VPN和10G吞吐量，適合大型企業安全防護。',
            'en': 'Next-generation firewall integrating IPS, antivirus and application control with IPSec/SSL VPN support and 10Gbps throughput, engineered for large enterprise security.'
        },
        specs: ['NGFW', 'IPS / Anti-Virus', 'App Control', 'IPSec VPN', '10G Throughput']
    },
    {
        id: 'huawei-10',
        image: 'assets/products/huawei-10.png', brand: 'HUAWEI', brandClass: 'brand-huawei',
        category: 'switch', icon: '🔀',
        model: 'CE6865-48S8CQ',
        name: { 'zh-TW': '華為 CloudEngine CE6865 交換機', 'en': 'Huawei CloudEngine CE6865 Switch' },
        desc: {
            'zh-TW': '數據中心萬兆交換機，支援48個25G下行接口和8個100G上行接口，具備VXLAN和EVPN功能，適合超大規模數據中心Spine-Leaf架構。',
            'en': 'Data center 25GbE switch with 48x 25G downlinks and 8x 100G uplinks, supporting VXLAN/EVPN for hyperscale data center spine-leaf architecture.'
        },
        specs: ['48x 25GbE', '8x 100G QSFP28', 'Layer 3', 'VxLAN / EVPN', '0.8Tbps Switching']
    },

    // ==================== TP-LINK (10 products) ====================
    {
        id: 'tplink-01',
        image: 'assets/products/tplink-01.png', brand: 'TP-LINK', brandClass: 'brand-tplink',
        category: 'switch', icon: '🔀',
        model: 'T2600G-28TS',
        name: { 'zh-TW': 'TP-Link JetStream T2600G-28TS 交換機', 'en': 'TP-Link JetStream T2600G-28TS Switch' },
        desc: {
            'zh-TW': '24端口千兆L2+管理型交換機，配備4個萬兆SFP+光口，支援靜態路由和基本的ACL功能，是中小型企業經濟實惠的管理型交換機選擇。',
            'en': '24-port Gigabit L2+ managed switch with 4x 10GbE SFP+ uplinks, supporting static routing and basic ACL, an affordable managed switch choice for SMBs.'
        },
        specs: ['24x 1GbE', '4x 10GbE SFP+', 'L2+ Features', 'Static Routing', 'Stackable']
    },
    {
        id: 'tplink-02',
        image: 'assets/products/tplink-02.png', brand: 'TP-LINK', brandClass: 'brand-tplink',
        category: 'switch', icon: '🔀',
        model: 'T1600G-28PS',
        name: { 'zh-TW': 'TP-Link JetStream T1600G-28PS PoE交換機', 'en': 'TP-Link JetStream T1600G-28PS PoE Switch' },
        desc: {
            'zh-TW': '24端口千兆PoE+交換機，總功率預算192W，支援LLDP和IGMP Snooping，適合IP攝像頭和無線AP供電一體化部署。',
            'en': '24-port Gigabit PoE+ switch with 192W total power budget, supporting LLDP and IGMP Snooping, ideal for unified IP camera and wireless AP powered deployment.'
        },
        specs: ['24x 1GbE PoE+', '4x SFP', '192W Budget', 'L2 Managed', 'VLAN Support']
    },
    {
        id: 'tplink-03',
        image: 'assets/products/tplink-03.png', brand: 'TP-LINK', brandClass: 'brand-tplink',
        category: 'ap', icon: '📶',
        model: 'EAP650',
        name: { 'zh-TW': 'TP-Link Omada EAP650 無線AP', 'en': 'TP-Link Omada EAP650 Access Point' },
        desc: {
            'zh-TW': 'Wi-Fi 6天花板式AP，支援AX1800速率（574Mbps 2.4GHz + 1201Mbps 5GHz），可透過Omada SDN平台集中管理，支援無縫漫遊。',
            'en': 'Wi-Fi 6 ceiling-mount AP with AX1800 speeds (574Mbps 2.4GHz + 1201Mbps 5GHz), centrally managed via Omada SDN platform with seamless roaming.'
        },
        specs: ['Wi-Fi 6 AX1800', 'Ceiling Mount', 'PoE+ Powered', 'Omada SDN', 'Mesh Support']
    },
    {
        id: 'tplink-04',
        image: 'assets/products/tplink-04.png', brand: 'TP-LINK', brandClass: 'brand-tplink',
        category: 'ap', icon: '📶',
        model: 'EAP670',
        name: { 'zh-TW': 'TP-Link Omada EAP670 無線AP', 'en': 'TP-Link Omada EAP670 Access Point' },
        desc: {
            'zh-TW': 'Wi-Fi 6高性能AP，支援AX5400速率和2.5G上行接口，具備頻段引导（Band Steering）功能，自動將用戶端引導至5GHz頻段。',
            'en': 'Wi-Fi 6 high-performance AP with AX5400 speeds and 2.5GbE uplink, featuring Band Steering to automatically guide clients to the 5GHz band.'
        },
        specs: ['Wi-Fi 6 AX5400', '2.5GbE Uplink', '4x4 MIMO', 'Omada SDN', 'Band Steering']
    },
    {
        id: 'tplink-05',
        image: 'assets/products/tplink-05.png', brand: 'TP-LINK', brandClass: 'brand-tplink',
        category: 'router', icon: '🌐',
        model: 'TL-R470GP',
        name: { 'zh-TW': 'TP-Link SafeStream TL-R470GP 路由器', 'en': 'TP-Link SafeStream TL-R470GP Router' },
        desc: {
            'zh-TW': '企業級多WAN口路由器，支援4個WAN口負載均衡和IPSec/PPTP/L2TP VPN隧道，內建防火牆策略，適合中小型企業多線路接入場景。',
            'en': 'Enterprise multi-WAN router with 4 WAN ports for load balancing and IPSec/PPTP/L2TP VPN tunnels, featuring built-in firewall policies for SMB multi-line access.'
        },
        specs: ['4x WAN', '1x LAN', 'Load Balance', 'IPSec/PPTP VPN', 'QoS']
    },
    {
        id: 'tplink-06',
        image: 'assets/products/tplink-06.png', brand: 'TP-LINK', brandClass: 'brand-tplink',
        category: 'switch', icon: '🔀',
        model: 'T3700G-52T',
        name: { 'zh-TW': 'TP-Link JetStream T3700G-52T 交換機', 'en': 'TP-Link JetStream T3700G-52T Switch' },
        desc: {
            'zh-TW': '48端口千兆L3管理型交換機，配備4個萬兆SFP+光口，支援OSPF和BGP動態路由協議，適合中型企業核心層部署。',
            'en': '48-port Gigabit L3 managed switch with 4x 10GbE SFP+ uplinks, supporting OSPF and BGP dynamic routing protocols for mid-size enterprise core layers.'
        },
        specs: ['48x 1GbE', '4x 10GbE SFP+', 'Layer 3', 'OSPF / BGP', 'Stackable']
    },
    {
        id: 'tplink-07',
        image: 'assets/products/tplink-07.png', brand: 'TP-LINK', brandClass: 'brand-tplink',
        category: 'ap', icon: '📶',
        model: 'EAP620-HD',
        name: { 'zh-TW': 'TP-Link Omada EAP620 HD 無線AP', 'en': 'TP-Link Omada EAP620 HD Access Point' },
        desc: {
            'zh-TW': 'Wi-Fi 6壁掛式AP，配備高增益天線，支援PoE供電，適合長走廊、倉庫和室外長條形空間的無線覆蓋場景。',
            'en': 'Wi-Fi 6 wall-mount AP with high-gain antennas and PoE power, designed for wireless coverage in long corridors, warehouses and outdoor linear spaces.'
        },
        specs: ['Wi-Fi 6 AX1800', 'Wall Mount', 'High-Gain Antenna', 'PoE+ Powered', 'Omada SDN']
    },
    {
        id: 'tplink-08',
        image: 'assets/products/tplink-08.png', brand: 'TP-LINK', brandClass: 'brand-tplink',
        category: 'switch', icon: '🔀',
        model: 'T2600G-52TS',
        name: { 'zh-TW': 'TP-Link JetStream T2600G-52TS 交換機', 'en': 'TP-Link JetStream T2600G-52TS Switch' },
        desc: {
            'zh-TW': '48端口千兆L2+管理型交換機，4個SFP+光口與電口共用（共用口），支援硬體堆疊技術，簡化多台交換機管理。',
            'en': '48-port Gigabit L2+ managed switch with 4 shared 10GbE SFP+/copper combo ports and hardware stacking for simplified multi-switch management.'
        },
        specs: ['48x 1GbE', '4x 10GbE Combo', 'L2+ Managed', 'Hardware Stacking', 'ACL & QoS']
    },
    {
        id: 'tplink-09',
        image: 'assets/products/tplink-09.png', brand: 'TP-LINK', brandClass: 'brand-tplink',
        category: 'router', icon: '🌐',
        model: 'TL-ER604W',
        name: { 'zh-TW': 'TP-Link SafeStream TL-ER604W 路由器', 'en': 'TP-Link SafeStream TL-ER604W Router' },
        desc: {
            'zh-TW': '企業級VPN路由器，支援雙WAN負載均衡和硬體加速IPSec VPN（最高800Mbps），內建無線功能，適合小型辦公室一體化網絡需求。',
            'en': 'Enterprise VPN router with dual-WAN load balancing and hardware-accelerated IPSec VPN (up to 800Mbps), featuring built-in wireless for all-in-one SOHO networking.'
        },
        specs: ['Dual WAN', 'IPSec VPN', 'Load Balance', 'Wi-Fi Built-in', 'VLAN Support']
    },
    {
        id: 'tplink-10',
        image: 'assets/products/tplink-10.png', brand: 'TP-LINK', brandClass: 'brand-tplink',
        category: 'controller', icon: '🎮',
        model: 'OC200',
        name: { 'zh-TW': 'TP-Link Omada OC200 硬體控制器', 'en': 'TP-Link Omada OC200 Hardware Controller' },
        desc: {
            'zh-TW': 'Omada SDN硬體控制器，最多可管理200台EAP接入點和JetStream交換機，支援雲端遠程管理，實現零接觸部署（Zero-Touch Provisioning）。',
            'en': 'Omada SDN hardware controller managing up to 200 EAPs and JetStream switches, supporting cloud remote management and zero-touch provisioning.'
        },
        specs: ['Hardware Controller', 'Up to 200 Devices', 'Cloud Access', 'Zero-Touch Provisioning', 'SDN Platform']
    },

    // ==================== ARUBA (10 products) ====================
    {
        id: 'aruba-01',
        image: 'assets/products/aruba-01.png', brand: 'ARUBA', brandClass: 'brand-aruba',
        category: 'switch', icon: '🔀',
        model: 'JL258A',
        name: { 'zh-TW': 'Aruba 2930F 48G 交換機', 'en': 'Aruba 2930F 48G Switch' },
        desc: {
            'zh-TW': '48端口千兆L3交換機，配備4個SFP+光口，支援Aruba Central雲管理和VSF堆疊技術，適合企業園區匯聚層和核心層部署。',
            'en': '48-port Gigabit L3 switch with 4x SFP+ uplinks, supporting Aruba Central cloud management and VSF stacking, designed for enterprise campus aggregation and core layers.'
        },
        specs: ['48x 1GbE', '4x 10GbE SFP+', 'Layer 3 Lite', 'Aruba Central', 'VSF Stacking']
    },
    {
        id: 'aruba-02',
        image: 'assets/products/aruba-02.png', brand: 'ARUBA', brandClass: 'brand-aruba',
        category: 'ap', icon: '📶',
        model: 'R3W12A',
        name: { 'zh-TW': 'Aruba AP505 無線AP', 'en': 'Aruba AP505 Access Point' },
        desc: {
            'zh-TW': 'Wi-Fi 6雙頻接入點，支援AX3000速率，內置藍牙5.0和Zigbee物聯網無線電，可透過Aruba Central統一管理，支援智慧RF優化。',
            'en': 'Wi-Fi 6 dual-band AP with AX3000 speeds, built-in Bluetooth 5.0 and Zigbee IoT radio, centrally managed via Aruba Central with AI-powered RF optimization.'
        },
        specs: ['Wi-Fi 6 AX3000', 'Dual-band', '2.5GbE Uplink', 'IoT Radio', 'Aruba Central']
    },
    {
        id: 'aruba-03',
        image: 'assets/products/aruba-03.png', brand: 'ARUBA', brandClass: 'brand-aruba',
        category: 'ap', icon: '📶',
        model: 'R3H22A',
        name: { 'zh-TW': 'Aruba AP515 無線AP', 'en': 'Aruba AP515 Access Point' },
        desc: {
            'zh-TW': 'Wi-Fi 6E三頻接入點，支援6GHz頻段（最高1.2Gbps），提供更大無線容量和更低延遲，適合高密人群場景如會議中心和體育館。',
            'en': 'Wi-Fi 6E tri-band AP supporting the 6GHz band (up to 1.2Gbps), delivering greater wireless capacity and lower latency for ultra-high-density venues like convention centers.'
        },
        specs: ['Wi-Fi 6E', 'Tri-band', 'AX5400', '2.5GbE Uplink', 'Ultra Tri-band']
    },
    {
        id: 'aruba-04',
        image: 'assets/products/aruba-04.png', brand: 'ARUBA', brandClass: 'brand-aruba',
        category: 'controller', icon: '🎮',
        model: 'JW027A',
        name: { 'zh-TW': 'Aruba 7205 無線控制器', 'en': 'Aruba 7205 Mobility Controller' },
        desc: {
            'zh-TW': '企業級無線控制器，支援最多2,048個AP管理，提供基於角色的訪問控制（Role-Based Access）和AppRF應用可視化功能。',
            'en': 'Enterprise wireless controller supporting up to 2,048 APs with role-based access control and AppRF application visibility for granular policy enforcement.'
        },
        specs: ['Up to 2,048 APs', '10Gbps Throughput', 'AppRF', 'Role-based Access', 'Redundant PSU']
    },
    {
        id: 'aruba-05',
        image: 'assets/products/aruba-05.png', brand: 'ARUBA', brandClass: 'brand-aruba',
        category: 'switch', icon: '🔀',
        model: 'J9775A',
        name: { 'zh-TW': 'Aruba 2530 48G 交換機', 'en': 'Aruba 2530 48G Switch' },
        desc: {
            'zh-TW': '48端口千兆L2管理型交換機，支援PoE+供電（370W），安靜模式可在非高峰時段降低功耗，適合小型企業和分支機構安靜部署。',
            'en': '48-port Gigabit L2 managed switch with PoE+ support (370W) and quiet-mode operation for reduced power consumption during off-hours, ideal for SMBs and branch offices.'
        },
        specs: ['48x 1GbE PoE+', '4x SFP', 'L2 Managed', 'Static Routing', 'LLDP']
    },
    {
        id: 'aruba-06',
        image: 'assets/products/aruba-06.png', brand: 'ARUBA', brandClass: 'brand-aruba',
        category: 'switch', icon: '🔀',
        model: 'JL667A',
        name: { 'zh-TW': 'Aruba CX 6300M 交換機', 'en': 'Aruba CX 6300M Switch' },
        desc: {
            'zh-TW': '48端口千兆PoE交換機，搭載Aruba AOS-CX操作系統，支援VSF堆疊和動態分片段（Dynamic Segmentation），自動實施基於角色的安全策略。',
            'en': '48-port Gigabit PoE switch running AOS-CX with VSF stacking and Dynamic Segmentation, automatically enforcing role-based security policies across wired and wireless.'
        },
        specs: ['48x 1GbE PoE+', '4x SFP56', 'AOS-CX', 'VSF Stacking', 'Dynamic Segmentation']
    },
    {
        id: 'aruba-07',
        image: 'assets/products/aruba-07.png', brand: 'ARUBA', brandClass: 'brand-aruba',
        category: 'switch', icon: '🔀',
        model: 'JL596A',
        name: { 'zh-TW': 'Aruba CX 6200F 交換機', 'en': 'Aruba CX 6200F Switch' },
        desc: {
            'zh-TW': '48端口千兆PoE交換機，採用無風扇設計，運行噪音低於25dBA，適合辦公室開放區和會議室等對噪音敏感的環境。',
            'en': '48-port Gigabit PoE switch with fanless design operating below 25dBA, perfectly suited for noise-sensitive environments like open offices and conference rooms.'
        },
        specs: ['48x 1GbE PoE+', '4x SFP+', 'Fanless', 'AOS-CX', 'Cloud Managed']
    },
    {
        id: 'aruba-08',
        image: 'assets/products/aruba-08.png', brand: 'ARUBA', brandClass: 'brand-aruba',
        category: 'ap', icon: '📶',
        model: 'R3V03A',
        name: { 'zh-TW': 'Aruba AP535 無線AP', 'en': 'Aruba AP535 Access Point' },
        desc: {
            'zh-TW': 'Wi-Fi 6雙頻接入點，支援AX5400速率和5GbE上行接口，通過WPA3安全協議認證，適合對安全性要求嚴格的企業環境。',
            'en': 'Wi-Fi 6 dual-band AP with AX5400 speeds and 5GbE uplink, WPA3-certified for enhanced wireless security in enterprise environments with stringent compliance requirements.'
        },
        specs: ['Wi-Fi 6 AX5400', 'Dual-band', '5GbE Uplink', 'BLE + Zigbee', 'WPA3']
    },
    {
        id: 'aruba-09',
        image: 'assets/products/aruba-09.png', brand: 'ARUBA', brandClass: 'brand-aruba',
        category: 'controller', icon: '🎮',
        model: 'JW015A',
        name: { 'zh-TW': 'Aruba 7030 無線控制器', 'en': 'Aruba 7030 Mobility Controller' },
        desc: {
            'zh-TW': '分支機構專用無線控制器，支援最多16個AP管理，提供安全的SD-WAN遠程接入和自動化分支部署功能，適合零售連鎖門市場景。',
            'en': 'Branch-office dedicated wireless controller supporting up to 16 APs, featuring secure SD-WAN remote access and automated branch deployment for retail chain scenarios.'
        },
        specs: ['Up to 16 APs', '1Gbps Throughput', 'VPN Support', 'Branch Deployment', 'Policy Firewall']
    },
    {
        id: 'aruba-10',
        image: 'assets/products/aruba-10.png', brand: 'ARUBA', brandClass: 'brand-aruba',
        category: 'switch', icon: '🔀',
        model: 'JL080A',
        name: { 'zh-TW': 'Aruba CX 8320 交換機', 'en': 'Aruba CX 8320 Switch' },
        desc: {
            'zh-TW': '48端口萬兆SFP+數據中心交換機，支援EVPN-VXLAN和100G上行接口，採用AOS-CX操作系統，適合現代化數據中心Spine節點部署。',
            'en': '48-port 10GbE SFP+ data center switch with EVPN-VXLAN and 100G uplinks, running AOS-CX OS, designed for modern data center spine node deployments.'
        },
        specs: ['48x 10GbE SFP+', '6x 100G QSFP28', 'EVPN/VXLAN', 'AOS-CX', '3.2Tbps Switching']
    },

    // ==================== JUNIPER (10 products) ====================
    {
        id: 'juniper-01',
        image: 'assets/products/juniper-01.png', brand: 'JUNIPER', brandClass: 'brand-juniper',
        category: 'switch', icon: '🔀',
        model: 'EX2300-48T',
        name: { 'zh-TW': 'Juniper EX2300 交換機', 'en': 'Juniper EX2300 Switch' },
        desc: {
            'zh-TW': '48端口千兆L2/L3交換機，緊湊1U設計，支援Virtual Chassis虛擬堆疊技術（最多10台），適合分支機構和小型園區網絡接入層。',
            'en': '48-port Gigabit L2/L3 switch in compact 1U design, supporting Virtual Chassis stacking (up to 10 units), ideal for branch offices and small campus access layers.'
        },
        specs: ['48x 1GbE', '4x 10GbE SFP+', 'L2/L3', 'Virtual Chassis', 'Compact 1U']
    },
    {
        id: 'juniper-02',
        image: 'assets/products/juniper-02.png', brand: 'JUNIPER', brandClass: 'brand-juniper',
        category: 'switch', icon: '🔀',
        model: 'EX3400-48T',
        name: { 'zh-TW': 'Juniper EX3400 交換機', 'en': 'Juniper EX3400 Switch' },
        desc: {
            'zh-TW': '48端口千兆L3交換機，支援Virtual Chassis堆疊（最多10台）和EVPN-VXLAN，適合中型企業園區匯聚層部署。',
            'en': '48-port Gigabit L3 switch with Virtual Chassis stacking (up to 10 units) and EVPN-VXLAN support, suitable for mid-size enterprise campus aggregation layers.'
        },
        specs: ['48x 1GbE', '4x 40GbE QSFP+', 'L3 / EVPN', 'Virtual Chassis', 'PoE+ Option']
    },
    {
        id: 'juniper-03',
        image: 'assets/products/juniper-03.png', brand: 'JUNIPER', brandClass: 'brand-juniper',
        category: 'switch', icon: '🔀',
        model: 'EX4300-48T',
        name: { 'zh-TW': 'Juniper EX4300 交換機', 'en': 'Juniper EX4300 Switch' },
        desc: {
            'zh-TW': '48端口千兆聚合交換機，支援Virtual Chassis堆疊和全萬兆上行（8x 10GbE SFP+），具備對支路檢測和修復功能，適合園區核心層部署。',
            'en': '48-port Gigabit aggregation switch with Virtual Chassis stacking and full 10GbE uplinks (8x 10GbE SFP+), featuring bi-directional forwarding detection (BFD), designed for campus core layers.'
        },
        specs: ['48x 1GbE', '8x 10GbE SFP+', 'L3 Features', 'Virtual Chassis', 'PoE+ Available']
    },
    {
        id: 'juniper-04',
        image: 'assets/products/juniper-04.png', brand: 'JUNIPER', brandClass: 'brand-juniper',
        category: 'router', icon: '🌐',
        model: 'MX204',
        name: { 'zh-TW': 'Juniper MX204 路由器', 'en': 'Juniper MX204 Router' },
        desc: {
            'zh-TW': '通用邊界路由器，支援高達400G吞吐量，提供8個可插拔接口插槽（支援10/40/100G），搭載Junos OS操作系統，適用於企業和服務提供商網絡。',
            'en': 'Universal edge router supporting up to 400Gbps throughput with 8 pluggable interface slots (10/40/100G support), running Junos OS for enterprise and service provider networks.'
        },
        specs: ['400Gbps', '8x 10/40/100G', 'Junos OS', 'MPLS', 'Redundant Cooling']
    },
    {
        id: 'juniper-05',
        image: 'assets/products/juniper-05.png', brand: 'JUNIPER', brandClass: 'brand-juniper',
        category: 'firewall', icon: '🛡️',
        model: 'SRX300',
        name: { 'zh-TW': 'Juniper SRX300 防火牆', 'en': 'Juniper SRX300 Firewall' },
        desc: {
            'zh-TW': '分支機構下一代防火牆，整合UTM安全功能（IPS、反病毒、反垃圾郵件），支援SD-WAN和IPSec VPN，8個千兆電口提供靈活部署選項。',
            'en': 'Branch office next-generation firewall with integrated UTM (IPS, anti-virus, anti-spam), SD-WAN and IPSec VPN support, offering 8 Gigabit ports for flexible deployment.'
        },
        specs: ['NGFW', '1Gbps Firewall', 'UTM Suite', 'SD-WAN', '8x GE Ports']
    },
    {
        id: 'juniper-06',
        image: 'assets/products/juniper-06.png', brand: 'JUNIPER', brandClass: 'brand-juniper',
        category: 'firewall', icon: '🛡️',
        model: 'SRX340',
        name: { 'zh-TW': 'Juniper SRX340 防火牆', 'en': 'Juniper SRX340 Firewall' },
        desc: {
            'zh-TW': '中端下一代防火牆，防火牆吞吐量達8Gbps，提供16個千兆電口和模組化Mini-PCIe插槽，可擴充LTE/5G無線備援接口。',
            'en': 'Mid-range next-generation firewall with 8Gbps firewall throughput, 16 Gigabit ports and modular Mini-PCIe slots for LTE/5G wireless backup interface expansion.'
        },
        specs: ['NGFW', '8Gbps Firewall', 'IPS / Anti-Spam', '16x GE', 'Mini-PCIe Slots']
    },
    {
        id: 'juniper-07',
        image: 'assets/products/juniper-07.png', brand: 'JUNIPER', brandClass: 'brand-juniper',
        category: 'ap', icon: '📶',
        model: 'AP43',
        name: { 'zh-TW': 'Juniper Mist AP43 無線AP', 'en': 'Juniper Mist AP43 Access Point' },
        desc: {
            'zh-TW': 'Wi-Fi 6雙頻接入點，整合Mist AI引擎，透過虛擬網絡助手（Marvis）實現自動化無線故障排除和優化，內置藍牙Low Energy信標。',
            'en': 'Wi-Fi 6 dual-band AP integrated with Mist AI engine, featuring the Marvis virtual network assistant for automated wireless troubleshooting and optimization with built-in BLE beacon.'
        },
        specs: ['Wi-Fi 6 AX3000', 'Dual-band', 'BLE Radio', 'Mist AI', '2.5GbE Uplink']
    },
    {
        id: 'juniper-08',
        image: 'assets/products/juniper-08.png', brand: 'JUNIPER', brandClass: 'brand-juniper',
        category: 'switch', icon: '🔀',
        model: 'QFX5120-48Y',
        name: { 'zh-TW': 'Juniper QFX5120 交換機', 'en': 'Juniper QFX5120 Switch' },
        desc: {
            'zh-TW': '48端口25G SFP28數據中心交換機，支援EVPN-VXLAN和100G上行，提供3.6Tbps交換容量，適合現代化數據中心葉節點（Leaf）。',
            'en': '48-port 25GbE SFP28 data center switch with EVPN-VXLAN and 100G uplinks, delivering 3.6Tbps switching capacity for modern data center leaf nodes.'
        },
        specs: ['48x 25GbE', '4x 100G QSFP28', 'EVPN/VXLAN', 'L3 Routing', '3.6Tbps']
    },
    {
        id: 'juniper-09',
        image: 'assets/products/juniper-09.png', brand: 'JUNIPER', brandClass: 'brand-juniper',
        category: 'router', icon: '🌐',
        model: 'ACX5448',
        name: { 'zh-TW': 'Juniper ACX5448 路由器', 'en': 'Juniper ACX5448 Router' },
        desc: {
            'zh-TW': '城域接入路由器，支援48個千兆電口和6個萬兆SFP+光口，具備精確時間同步（IEEE 1588）功能，適合5G移動回傳和服務提供商邊緣部署。',
            'en': 'Metro access router with 48 Gigabit copper and 6x 10GbE SFP+ ports, featuring IEEE 1588 precision timing for 5G mobile backhaul and service provider edge deployment.'
        },
        specs: ['48x 1GbE', '6x 10GbE SFP+', 'L2/L3', 'MPLS', 'Precision Timing']
    },
    {
        id: 'juniper-10',
        image: 'assets/products/juniper-10.png', brand: 'JUNIPER', brandClass: 'brand-juniper',
        category: 'switch', icon: '🔀',
        model: 'EX4600-40F',
        name: { 'zh-TW': 'Juniper EX4600 交換機', 'en': 'Juniper EX4600 Switch' },
        desc: {
            'zh-TW': '40端口萬兆SFP+交換機，支援Virtual Chassis堆疊和VXLAN網狀隧道，提供低至1μs的延遲，適合金融交易和低延遲數據中心應用。',
            'en': '40-port 10GbE SFP+ switch with Virtual Chassis stacking and VXLAN mesh tunneling, delivering ultra-low <1μs latency for financial trading and latency-sensitive data center applications.'
        },
        specs: ['40x 10GbE SFP+', '4x 40GbE QSFP+', 'EVPN/VXLAN', 'Virtual Chassis', 'L3 Routing']
    },

    // ==================== H3C (10 products) ====================
    {
        id: 'h3c-01',
        image: 'assets/products/h3c-01.png', brand: 'H3C', brandClass: 'brand-h3c',
        category: 'switch', icon: '🔀',
        model: 'S5560-EI-54HC-EV',
        name: { 'zh-TW': 'H3C S5560-EI 交換機', 'en': 'H3C S5560-EI Switch' },
        desc: {
            'zh-TW': '48端口千兆L3交換機，配備6個萬兆SFP+上行接口，支援IRF（智能彈性架構）堆疊技術和IPv6全功能，適合園區核心和匯聚層部署。',
            'en': '48-port Gigabit L3 switch with 6x 10GbE SFP+ uplinks, supporting IRF (Intelligent Resilient Framework) stacking and full IPv6 features for campus core and aggregation layers.'
        },
        specs: ['48x 1GbE', '6x 10GbE SFP+', 'L3 Routing', 'IRF Stacking', 'IPv6 Ready']
    },
    {
        id: 'h3c-02',
        image: 'assets/products/h3c-02.png', brand: 'H3C', brandClass: 'brand-h3c',
        category: 'switch', icon: '🔀',
        model: 'S6520X-EI-54HF-EV',
        name: { 'zh-TW': 'H3C S6520X-EI 交換機', 'en': 'H3C S6520X-EI Switch' },
        desc: {
            'zh-TW': '48端口萬兆SFP+交換機，支援IRF2堆疊和VXLAN二層網關功能，6個40/100G擴充插槽提供充足的上下行頻寬，適用於數據中心網絡。',
            'en': '48-port 10GbE SFP+ switch with IRF2 stacking and VXLAN L2 gateway support, featuring 6x 40/100G expansion slots for ample up/downlink bandwidth in data center networks.'
        },
        specs: ['48x 10GbE SFP+', '6x 40/100G', 'L3 / EVPN', 'IRF2', 'VxLAN']
    },
    {
        id: 'h3c-03',
        image: 'assets/products/h3c-03.png', brand: 'H3C', brandClass: 'brand-h3c',
        category: 'switch', icon: '🔀',
        model: 'S5000-EI-28S',
        name: { 'zh-TW': 'H3C S5000-EI 交換機', 'en': 'H3C S5000-EI Switch' },
        desc: {
            'zh-TW': '24端口千兆L2+交換機，支援PoE+供電和雲管理平台（H3C Cloudnet），4個SFP+光口提供上行頻寬，適合中小型企業接入層部署。',
            'en': '24-port Gigabit L2+ switch with PoE+ support and cloud management (H3C Cloudnet), 4x SFP+ uplinks for SMB access layer deployment.'
        },
        specs: ['24x 1GbE PoE+', '4x SFP+', 'L2+ Managed', 'Cloud Managed', 'VLAN / ACL']
    },
    {
        id: 'h3c-04',
        image: 'assets/products/h3c-04.png', brand: 'H3C', brandClass: 'brand-h3c',
        category: 'router', icon: '🌐',
        model: 'MSR3600-28',
        name: { 'zh-TW': 'H3C MSR3600 路由器', 'en': 'H3C MSR3600 Router' },
        desc: {
            'zh-TW': '企業級多業務路由器，支援SD-WAN智能選路、語音網關功能和內建防火牆，提供4個模組化插槽，適合中型企業分支機構多功能一體化部署。',
            'en': 'Enterprise multi-service router with SD-WAN, voice gateway and built-in firewall, featuring 4 modular slots for interface expansion, suitable for multi-function branch office deployment.'
        },
        specs: ['Multi-service', 'SD-WAN', 'Voice / Security', 'Modular Slots', 'IPv6']
    },
    {
        id: 'h3c-05',
        image: 'assets/products/h3c-05.png', brand: 'H3C', brandClass: 'brand-h3c',
        category: 'controller', icon: '🎮',
        model: 'WX5540H',
        name: { 'zh-TW': 'H3C WX5540H 無線控制器', 'en': 'H3C WX5540H Wireless Controller' },
        desc: {
            'zh-TW': '高性能無線控制器，支援最多1,024個AP管理，提供20Gbps吞吐量，支援IRF2堆疊實現控制器冗餘，適合大型企業無線網絡集中管理。',
            'en': 'High-performance wireless controller supporting up to 1,024 APs with 20Gbps throughput, IRF2 stacking for controller redundancy, designed for large enterprise wireless network centralized management.'
        },
        specs: ['Up to 1,024 APs', '20Gbps Throughput', 'IRF2 Stacking', 'Policy Management', 'IPv6']
    },
    {
        id: 'h3c-06',
        image: 'assets/products/h3c-06.png', brand: 'H3C', brandClass: 'brand-h3c',
        category: 'ap', icon: '📶',
        model: 'WA6520X',
        name: { 'zh-TW': 'H3C WA6520X 無線AP', 'en': 'H3C WA6520X Access Point' },
        desc: {
            'zh-TW': 'Wi-Fi 6天花板式AP，支援AX3600速率（574Mbps 2.4GHz + 2402Mbps 5GHz），2.5G上行接口，內置IoT擴充接口，適合高密度辦公環境。',
            'en': 'Wi-Fi 6 ceiling-mount AP with AX3600 speeds (574Mbps 2.4GHz + 2402Mbps 5GHz), 2.5GbE uplink and built-in IoT expansion port for high-density office environments.'
        },
        specs: ['Wi-Fi 6 AX3600', 'Ceiling Mount', '2.5GbE Uplink', 'PoE+', 'IoT Port']
    },
    {
        id: 'h3c-07',
        image: 'assets/products/h3c-07.png', brand: 'H3C', brandClass: 'brand-h3c',
        category: 'firewall', icon: '🛡️',
        model: 'SecPath F1000-AK135',
        name: { 'zh-TW': 'H3C SecPath F1000 防火牆', 'en': 'H3C SecPath F1000 Firewall' },
        desc: {
            'zh-TW': '下一代防火牆，整合入侵防禦（IPS）、URL過濾和應用控制功能，提供1Gbps防火牆吞吐量和VPN隧道支援，適合中型企業安全防護。',
            'en': 'Next-generation firewall with integrated IPS, URL filtering and application control, delivering 1Gbps firewall throughput with VPN tunnel support for mid-size enterprise security.'
        },
        specs: ['NGFW', 'IPS / Anti-Virus', 'App Control', 'VPN Support', '1Gbps Throughput']
    },
    {
        id: 'h3c-08',
        image: 'assets/products/h3c-08.png', brand: 'H3C', brandClass: 'brand-h3c',
        category: 'server', icon: '🖥️',
        model: 'R4900 G5',
        name: { 'zh-TW': 'H3C R4900 G5 伺服器', 'en': 'H3C R4900 G5 Server' },
        desc: {
            'zh-TW': '2U通用型機架伺服器，支援雙路Intel Xeon處理器和24個NVMe SSD槽，具備H3C HDM帶外管理功能，適用於企業核心應用和虛擬化平台。',
            'en': '2U general-purpose rack server with dual Intel Xeon processors and 24 NVMe SSD bays, featuring H3C HDM out-of-band management for enterprise core applications and virtualization platforms.'
        },
        specs: ['2U Rack', 'Dual Intel Xeon', '32x DIMM', '24x NVMe', 'HDM Management']
    },
    {
        id: 'h3c-09',
        image: 'assets/products/h3c-09.png', brand: 'H3C', brandClass: 'brand-h3c',
        category: 'storage', icon: '💾',
        model: 'UniStor HS3220',
        name: { 'zh-TW': 'H3C UniStor HS3220 存儲系統', 'en': 'H3C UniStor HS3220 Storage System' },
        desc: {
            'zh-TW': '企業級統一存儲系統，支援SAN/NAS一體化，提供SSD緩存加速和數據重複刪除功能，最大可擴展至2PB有效容量，適合虛擬化環境和文件共享。',
            'en': 'Enterprise unified storage system with integrated SAN/NAS, SSD cache acceleration and data deduplication, scaleable up to 2PB effective capacity for virtualization and file sharing.'
        },
        specs: ['Unified SAN/NAS', 'SSD Cache', 'Dedup & Compression', 'Up to 2PB', 'Snapshot']
    },
    {
        id: 'h3c-10',
        image: 'assets/products/h3c-10.png', brand: 'H3C', brandClass: 'brand-h3c',
        category: 'switch', icon: '🔀',
        model: 'S6850-56HF',
        name: { 'zh-TW': 'H3C S6850 交換機', 'en': 'H3C S6850 Switch' },
        desc: {
            'zh-TW': '48端口25G SFP28數據中心交換機，支援EVPN-VXLAN和100G上行接口，具備6.8Tbps交換容量，適合Spine-Leaf架構的現代化數據中心。',
            'en': '48-port 25GbE SFP28 data center switch with EVPN-VXLAN and 100G uplinks, delivering 6.8Tbps switching capacity for spine-leaf architecture in modern data centers.'
        },
        specs: ['48x 25GbE', '8x 100G QSFP28', 'EVPN/VXLAN', 'IRF2', '6.8Tbps Switching']
    }
];

// Brand list for filtering
var brandList = ['HP', 'DELL', 'HUAWEI', 'TP-LINK', 'ARUBA', 'JUNIPER', 'H3C'];

// Brand colors for dots/badges
var brandColors = {
    'HP': '#0078D4',
    'DELL': '#005F8B',
    'HUAWEI': '#C7000B',
    'TP-LINK': '#4CAF50',
    'ARUBA': '#FF6900',
    'JUNIPER': '#84B135',
    'H3C': '#E60012'
};

// Category icons
var categoryIcons = {
    'switch': '🔀',
    'router': '🌐',
    'server': '🖥️',
    'storage': '💾',
    'ap': '📶',
    'firewall': '🛡️',
    'controller': '🎮',
    'desktop': '💻',
    'tape': '📀',
    'frame': '🏗️'
};
