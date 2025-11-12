'use client';

const PromoBanner = () => {
  return (
    <section className="py-8 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          {/* Background Image */}
          <div 
            className="h-64 md:h-80 lg:h-96 bg-cover bg-center bg-no-repeat relative"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>
            
            {/* Content */}
            <div className="relative h-full flex items-center justify-between p-8 md:p-12">
              {/* Left Side - Text Content */}
              <div className="flex-1">
                <div className="space-y-2">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white font-helvetica">
                    SAINT LUCIA
                  </h2>
                  <p className="text-xl md:text-2xl text-purple-300 font-helvetica font-medium">
                    CARIBBEAN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
