import { Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, JoinColumn, 
    ManyToOne, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn } from "typeorm";
import { Aereopuerto} from './aereopuertoAviones.model';

@Entity('AereopuertoAV',{schema:'avionAereopuerto'})

export class Aviones{
    //columnas de la entidad 
    @PrimaryGeneratedColumn('nombreAvion')
    id:string;
    @CreateDateColumn({
        //objeto
        name:'create_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    
    createAT:Date;//atributo

    @UpdateDateColumn({
        name:'update_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    updateAt:Date;

    @DeleteDateColumn({
        name:'delete_at',
        type:'timestamptz',
        nullable:true,
    })

    deleteAt:Date; //el nombre del atributo
    //Relationships
    //paramtrro de entrada =>
    @ManyToOne(() => Aereopuerto, (airport) => Aereopuerto.airport)
    @JoinColumn({name:'aviones_id'})
    aereopuerto: CategoryEntity;

    @Column('varchar',{
        name:'name',
        unique:true,
        comment: 'Nombre de  la linea de avion',
    })
   nameAirport:string;

    @Column('varchar',{
        name:'linea',
        unique:true,
        comment:'linea del avion',
    })
    linea:string;
    
    @Column('varchar',{
        name:'typeofcollague',
        unique:true,
        comment:'Tipo de avion'
    })
    

}